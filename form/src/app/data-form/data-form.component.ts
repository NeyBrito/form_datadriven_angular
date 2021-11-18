import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { empty, Observable } from 'rxjs';
import { EstadoBr } from '../shared/models/estado-br.model';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { DropdownService } from '../shared/services/dropdown.service';
import { FormValidations } from '../shared/form-validations';
import { VerificaEmailService } from './services/verifica-email.service';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';



@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;
  //estados!: Observable<EstadoBr[]>;
  estados!: EstadoBr[];
  cargos!: any[];
  tecnologias!: any[];
  newsletterOp!: any[];
  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];
  cidades: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
  ) { }

  ngOnInit() {

    //this.verificaEmailService.verificarEmail('').subscribe();

    //this.estados = this.dropdownService.getEstadosBr();
    this.dropdownService.getEstadosBr().subscribe(dados => this.estados = dados);
    this.cargos = this.dropdownService.getCargos();
    this.tecnologias = this.dropdownService.getTecnologias();
    this.newsletterOp = this.dropdownService.getNewsletter();

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.email], this.validarEmail.bind(this)],
      confirmarEmail: [null, [Validators.required, FormValidations.equalsTo('email')]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, [Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]]
      }),
      cargo: [null],
      tecnologias: [null],
      newsletter: ['s'],
      termos: [null, [Validators.pattern('true')]],
      frameworks: this.buildFrameworks()
    });

    this.formulario.get('endereco.cep')?.statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('status CEP:', value)),
          switchMap(status => status === 'VALID' ? 
            this.cepService.consultaCEP(this.formulario.get('endereco.cep')?.value) : empty()
        )
      )
      .subscribe(dados => dados ?  this.populaDadosForm(dados) : {} );
      
      this.formulario.get('endereco.estado')?.valueChanges
        .pipe(
          tap(estado => console.log('Novo estado: ', estado)),
          map(estado => this.estados.filter(e => e.sigla === estado)),
          map((estados: any) => estados && estados.length > 0 ? estados[0].id  : empty()),
          switchMap((estadoId: number) => this.dropdownService.getCidades(estadoId)),
          tap(console.log)
        )
        .subscribe(cidades => this.cidades = cidades);
  }

  buildFrameworks() {
    const values = this.frameworks.map(v => new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));
  }

  getControls() {
    return (this.formulario.get('frameworks') as FormArray).controls;
  }

  onSubmit() {
    console.log(this.formulario.value)
    let valueSubmit = Object.assign({}, this.formulario.value)

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v: any, i: any) => v ? this.frameworks[i] : null)
        .filter((v: null) => v !== null)
    });

    console.log(valueSubmit);

    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit))
        .subscribe((dados: any) => {
          console.log(dados);
          //this.formulario.reset();
          this.resetar();
        },
          (error: any) => alert('erro'));
    } else {
      console.log('fomulario inválido')
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle?.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    if (this.formulario.get(campo)?.invalid && (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)) {
      return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;
    } else {
      return this.formulario.get(campo)?.valid || !this.formulario.get(campo)?.pristine;
    }
  }

  aplicaCssErro(campo: string) {
    if (this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched) {
      return {
        'is-invalid': this.verificaValidTouched(campo)
      };
    } else {
      return {
        'is-valid': this.verificaValidTouched(campo)
      };
    }
  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');
    if (campoEmail?.errors) {
      return campoEmail?.errors['email'] && campoEmail.touched;
    }
  }

  verificaRequired(campo: string) {
    return (this.formulario.get(campo)?.hasError('required') &&
      (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
    );
  }

  consultaCEP() {
    const cep = this.formulario.get('endereco.cep')?.value;
    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
        .subscribe((dados: any) => {
          this.populaDadosForm(dados);
        });
    }
  }

  populaDadosForm(dados: any) {
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        // cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }
  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  dados(dados: any) {
    throw new Error('Function not implemented.');
  }
  validarEmail(formControl: FormControl) {
    return this.verificaEmailService.verificarEmail(formControl.value)
      .pipe(map(emailExist => emailExist ? { emailInvalido: true } : null));
  }
}


