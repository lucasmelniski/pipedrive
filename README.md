<h1 align="center">
<br>
Pipedrive, Bling integration
</h1>

## 📃 Sobre o projeto

Projeto desenvolvido em typeScript que tem como propósito integrar as plataformas Pipedrive e Bling.

### Funcionalidades

- Adicionar oportunidades com status randomico no pipedrive
- Agregar oportunidades com status ganho no Bling
- Armazenar e buscar no MongoDB os ganhos por dia da plataforma Bling.

## 🛠 Tecnologias utilizadas

- 🛠 **Express** 
- 📡 **Axios** 
- - 🛠 **TypeOrm** 

## 🚀 Rodando o projeto

### Pré-requisitos

- Postman (ou similar)
- NodeJS

### 💻 Rodando

Clone o repositório

```bash
https://github.com/lucasmelniski/pipedrive.git
```

Navegue até a pasta do projeto clonado e instale as dependências

```bash
npm install
```

Após instalar as dependências, crie um arquivo .env seguindo o exemplo do .env.example

As configurações com prefixo TYPEORM são do mongoDB
O token do pipedrive pode ser encontrada em: https://SUAURL.pipedrive.com/settings/api
A key do bling pode ser ser encontrada em: https://www.bling.com.br/usuarios.php#list (caso não tenha um usuário API, é necessário cria-lo)

Após configurado é possível iniciar o projeto

```bash
npm run start
```

# Após isso a aplicação pode ser utilizada acessando o endereço http://localhost:1800

## 🛠 Endpoints

### Inserção randômica

É possível usar o caminho 

```bash
Method: POST
/deals/create/:manyTimes
```

para inserir oportunidades ao pipedrive, onde :manyTimes é o número de oportunidades que se deseja inserir.

### Integração Pipedrive/Bling

É possível usar o caminho 

```bash
Method: POST
/deals/integrate/pipebling
```

para inserir pedidos ao bling, esses pedidos puxam apenas as oportunidades com status won do pipedrive.

### Integração Bling/MongoDB

É possível usar o caminho 

```bash
Method: POST
/deals/integrate/blingmongodb
```

para atualizar ou criar uma colection no MongoDB que contem o dia e o ganho total dos pedidos do bling.

### Todos os ganhos MongoDB

É possível usar o caminho 

```bash
Method: GET
/deals/all
```

para trazer todos os dias e os respectivos ganhos armazenados no MongoDB

### Um ganho MongoDB

É possível usar o caminho 

```bash
Method: GET
/deals/one/:date
```

para trazer um dias e o respectivo ganho armazenado no MongoDB, o formato do parametro :date deve ser YYYY-MM-DD

```
