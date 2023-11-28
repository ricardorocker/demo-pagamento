# Folha de Pagamento Angular CRUD

## Visão Geral

Este é um projeto Angular que implementa uma interface para manipulação de itens em uma folha de pagamento. A aplicação permite a visualização, adição, edição e exclusão de itens, fornecendo um controle completo sobre os detalhes da folha de pagamento.

## Capturas de Tela

### Tela Principal

![Tela Principal](https://github.com/ricardorocker/demo-pagamento/assets/76121782/89d01510-03e6-4a27-b013-74dd9974cfa6)


A tela principal exibe uma visão geral da folha de pagamento, apresentando os itens de proventos e descontos. Os totais de descontos, proventos e o total geral são exibidos de forma clara na parte inferior da tabela.

### Tela de Edição

![Tela de Edição](https://github.com/ricardorocker/demo-pagamento/assets/76121782/12e879ad-d32e-4213-9d90-df57fd4f1ffb)


Ao clicar no botão de engrenagem, é possível alternar para o modo de edição, permitindo a manipulação dos itens da folha de pagamento. Os botões de ação na tabela possibilitam a edição e exclusão de itens.

### Modal de Adição/Edição

![Modal de Adição/Edição](https://github.com/ricardorocker/demo-pagamento/assets/76121782/f18a5481-4331-4380-b13a-f785f066766b)


Ao clicar em "Adicionar item", um modal é exibido para inserção de novos itens. O mesmo modal é utilizado para editar itens existentes. Ele apresenta validações para garantir a entrada correta de dados.

## Funcionalidades Principais

- Visualização clara e organizada da folha de pagamento.
- Adição de novos itens com descrição, referência, tipo (proventos ou descontos) e valor.
- Edição de itens existentes para ajustes na folha de pagamento.
- Exclusão de itens, proporcionando flexibilidade na gestão da folha.

## Parte Técnica

### Estrutura do Projeto

O projeto segue uma estrutura modular típica do Angular, dividida em módulos, componentes, serviços e modelos. A divisão permite uma organização clara e facilita a manutenção e escalabilidade do código.

- **`app`**: Módulo principal da aplicação.
  - **`views`**: Contém os componentes Angular utilizados na aplicação.
    - **`navbar`**: Componente de cabeçalho.
    - **`profile-card`**: Componente responsável pela exibição do card de perfil à esquerda.
  - **`components`**: Contém os componentes Angular utilizados na aplicação.
    - **`demo-pagamento`**: Componente principal da folha de pagamento.
    - **`demo-pagamento-table`**: Componente responsável pela exibição e manipulação da tabela.
    - **`item-pagamento-modal`**: Componente que define o modal para adição e edição de itens.
  - **`models`**: Define os modelos de dados utilizados na aplicação.
    - **`folha-pagamento`**: Interface com itens da folha de pagamento e valores totais consolidados.
    - **`item-folha-pagamento`**: Interface com itens da folha de pagamento.
    - **`totais`**: Interface com valores totais( descontos, proventos e geral).
  - **`services`**: Contém o serviço responsável pela comunicação com a API para manipulação de dados.

### Técnicas Angular Utilizadas

**`Services e Injeção de Dependência**:
  - Uso do serviço `DemoPagamentoService` para encapsular a lógica de comunicação com a API.
  - Injeção de dependência do serviço no componente.

**Observables e RxJS**:
  - Utilização de Observables para lidar com assincronia na obtenção dos itens da folha de pagamento.

- **Reactive Forms**:
  - Implementação de formulários reativos para manipulação de dados no modal.

- **NgFor e NgIf**:
  - Utilização de `*ngFor` para iterar sobre os itens da folha de pagamento.
  - Uso de `*ngIf` para exibir ou ocultar elementos com base em condições.

- **NgClass e Estilização Dinâmica**:
  - Uso de `ngClass` para aplicar classes dinamicamente com base em condições.

- **Angular CLI**:
  - Geração de componentes, serviços e módulos usando o Angular CLI.

- **Interpolação**:
  - Interpolação de variáveis no template para exibir dados dinâmicos.

- **TemplateRef**:
  - Uso de `TemplateRef` para criar e acessar templates no componente.

- **Bootstrap e Estilização**:
  - Integração do framework Bootstrap para estilização e layout responsivo.

- **NgOnInit**:
  - Implementação da interface OnInit para executar lógica na inicialização do componente.

- **EventEmitter**:
  - Uso do EventEmitter para emitir eventos do componente filho para o pai.

- **Pipes**:
  - Utilização de pipes (como `number` e `uppercase`) para formatar dados no template.

- **HTTP Client**:
  - Uso do módulo `HttpClient` para realizar operações HTTP e interagir com a API.

- **Modal com Ngx-bootstrap**:
  - Implementação de modais usando o pacote `ngx-bootstrap/modal`.

- **Angular Forms Validators**:
  - Utilização de validadores embutidos do Angular nos campos do formulário reativo.

- **JSON-Server para API Fake**:
  - Criação de uma API fake usando o JSON-Server para simular endpoints de backend durante o desenvolvimento.
  - Utilização do JSON-Server para fornecer dados fictícios a partir de um arquivo JSON (`db.json`), facilitando o desenvolvimento frontend sem a necessidade de um backend real.


### Como Executar o Projeto

Para executar o projeto localmente, siga os passos descritos anteriormente. Certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.

```bash
# Instalar as dependências
npm install

# Iniciar o servidor de desenvolvimento
ng serve

# Acesse a aplicação no navegador em http://localhost:4200/
````

#### Iniciar o JSON Server (API Fake)

O projeto depende de uma API fake fornecida pelo JSON Server para simular operações de CRUD. Certifique-se de iniciar o JSON Server antes de executar a aplicação Angular.

```bash
# Instalar o JSON Server globalmente (caso ainda não tenha)
npm install -g json-server

# Iniciar o JSON Server (a partir da raiz do projeto)
json-server --watch db.json
````

## Contact

Sinta-se à vontade para entrar em contato para mais informações ou esclarecimentos sobre o projeto.

- Nome: Ricardo S. Rocker
- Email: ricardo.santos.rocker@gmail.com
- GitHub: [GitHub Profile](https://github.com/ricardorocker)
- Website: [Ricardo Rocker's Website](https://ricardorocker.com/)
- Linkedin: [Ricardo Rocker's Linkdin](https://www.linkedin.com/in/ricardo-s-rocker/)
- Instagram: [Ricardo Rocker's Instagram](https://www.instagram.com/ricardorocker.developer/)

