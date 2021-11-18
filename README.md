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

![Nome](https://user-images.githubusercontent.com/35903451/142417453-a85f4273-be16-41e9-a067-c455acc500b2.png)

![Nome Valido](https://user-images.githubusercontent.com/35903451/142417829-6fea1fc5-8861-4e96-8f45-9d4a7be95d7d.png)

- **Validação campo E-mail**: 
    - verificação de e-mail; 
    - válido campo obrigatório;
    - confirmação de e-mail; 
    ![Email](https://user-images.githubusercontent.com/35903451/142417970-18a0caef-571a-4485-9a29-a3c6a7e188a8.png)
   ![Email Valido](https://user-images.githubusercontent.com/35903451/142418010-9156176f-a3d2-4f26-a7a6-56a0df809417.png)
    
- **Cep**:   
  - validação campo obrigatório 
  - preenchimento automático
     - Complemento;
     - Rua;
     - Bairro;
     - Cidade (Select - Mostra somente as cidades do estado carregado);	
     - Estado (Select);
     
     ![Endereço](https://user-images.githubusercontent.com/35903451/142418058-4b90483d-92bd-43ca-a4fa-25021f3bbc67.png)
     ![CepValido](https://user-images.githubusercontent.com/35903451/142418099-14c4c42a-4576-49c2-ab69-9b740866d882.png)
  
- **Cargo**(Select);

![Cargo](https://user-images.githubusercontent.com/35903451/142418142-a61d9906-c67a-40e1-a334-00ec16731f72.png)

- **Tecnologias**;

![Tecnologias](https://user-images.githubusercontent.com/35903451/142418214-e921aebf-8752-4c91-a6c5-935e2bdaa4ad.png)

- **Newsletter**(RadioButton);

![Newsletter](https://user-images.githubusercontent.com/35903451/142418262-ee200e18-8e81-459e-a05b-7e3f7397c526.png)

- **Frameworks**(CheckBox);

![Frameworks](https://user-images.githubusercontent.com/35903451/142418379-291d5417-a526-4e03-8973-41a30885aa8b.png)

- **Aceito os termos**(Checkbox):
     - Validação de envio de formulário somente se estive assinalado;
     
     ![Aceite os termos](https://user-images.githubusercontent.com/35903451/142418432-bb932ec2-6f05-41ee-b3cb-1db72f005f1a.png)

- **Submit/Cancelar**:
     - Só envia o formulario se todos campos obrigatorios estiverem preenchidos;
     - Cancela o preenchimento apagando todos os itens dos campos;
     
     ![Aceite os termos valido e Sbmit](https://user-images.githubusercontent.com/35903451/142418920-6b754c37-44a8-459e-a917-19ef1cd5b660.png)
           
     
## Detalhes do Form (_Corpo da Requisição_)

![Detalhes](https://user-images.githubusercontent.com/35903451/142418965-b01ab241-a2f4-4cde-b122-08dba43adc31.png)
