# Curso Angular ![Angular](https://cdn-images-1.medium.com/max/45/1*nbJ41jD1-r2Oe6FsLjKaOg@2x.png)


### _Formulários (Reativos data-driven)_

----------

#### Servidor de desenvolvimento

Executando `ng serve` para um servidor de desenvolvimento.

Navegue para `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

#### Para rodar o projeto

Foi utilizado o Angular CLI para estruturar e build.

Precisa fazer a instalação das bibliotecas bootstrap, materialize, lodash, jquery.

#### Conteúdo Abordado 📃

-   Formulários reativos (data driven) Introdução
-   Formulários reativos: Configuração (Módulo e Componente)
-   Formulários reativos: Criando um form com código Angular    
-   Formulários reativos: Sincronizando HTML com FormGroup    
-   Formulários reativos: Fazendo submit    
-   Resetando o form    
-   Formulários reativos: Aplicando validação nos campos    
-   Formulários reativos: Acesso ao FormControl no HTML e CSS de validação dos campos    
-   Formulários reativos: Endereço (migrando de template driven para form reativo)    
-   Formulários reativos: Form groups (agrupando dados)    
-   Formulários reativos: Autopopulando endereço com CEP (setValue e patchValue)    
-   Formulários reativos: Verificar validação dos campos com botão submit    
-   Formulários: Criando um serviço de Estados Brasileiros    
-   Formulários: Serviço de consulta CEP + provideIn    
-   Formulários reativos: Combobox simples (select)    
-   Formulários reativos: Combobox com Objeto (ngValue e compareWith)    
-   Formulários reativos: Combobox Múltiplo (Select Multiple)    
-   Formulários reativos: Radio Button (Botão do tipo Rádio)    
-   Formulários reativos: Checkbox Toggle    
-   Formulários reativos: FormArray: Checkboxes Dinâmicos    
-   Formulários reativos: Validação Customizada (FormArray Checkboxes)    
-   Formulários reativos: Validação Customizada (CEP)    
-   Formulários reativos: Validação entre dois campos (confirmar email)    
-   Formulários reativos: Validação Assíncrona    
-   Formulários reativos: Serviço de Mensagens de Erros    
-   Formulários reativos: Reagindo à mudanças reativamente    
-   Formulários reativos: Campo input customizado (ControlValueAcessor)    
-   Formulários reativos: Classe base para Forms (herança no Angular)    
-   Formulários reativos: Combobox aninhado: Estado + Cidade

## Detalhes do Formulário

- **Validação campo nome** (Obrigatoriedade);

<img src="file:///C:\Users\ney.brito\Pictures\Nome.png" alt="Nome" style="zoom: 80%;" />

![Nome Valido](file:///C:\Users\ney.brito\Pictures\Nome%20Valido.png)

- **Validação campo E-mail**: 
    - verificação de e-mail; 
    - válido campo obrigatório;
    - confirmação de e-mail; 
    ![email](file:///C:\Users\ney.brito\Pictures\Email.png)
    ![email validado](file:///C:\Users\ney.brito\Pictures\Email%20Valido.png)
    
- **Cep**:   
  - validação campo obrigatório 
  - preenchimento automático
     - Complemento;
     - Rua;
     - Bairro;
     - Cidade (Select - Mostra somente as cidades do estado carregado);	
     - Estado (Select);
     ![Endereço invalido](file:///C:\Users\ney.brito\Pictures\Endereço.png)
     ![cepvalido](file:///C:\Users\ney.brito\Pictures\CepValido.png)
  
- **Cargo**(Select);
![cargo](file:///C:\Users\ney.brito\Pictures\Cargo.png)

- **Tecnologias**;
![tecnologias](file:///C:\Users\ney.brito\Pictures\Tecnologias.png)

- **Newsletter**(RadioButton);
![news](file:///C:\Users\ney.brito\Pictures\Newsletter.png)

- **Frameworks**(CheckBox);
![Frame](file:///C:\Users\ney.brito\Pictures\Frameworks.png)

- **Aceito os termos**(Checkbox:
     - Validação de envio de formulário somente se estive assinalado;
     ![aceite](file:///C:\Users\ney.brito\Pictures\Aceite%20os%20termos.png)
     ![sbmit](file:///C:\Users\ney.brito\Pictures\Aceite%20os%20termos%20valido%20e%20Sbmit.png)
     
     
## Detalhes do Form (_Corpo da Requisição_)

![corpo](file:///C:\Users\ney.brito\Pictures\Detalhes.png)

