## 🏗️ Fornt-End teste tecnico MaxiProd - Guia de Configuração e Execução  

Este projeto é uma aplicação **React** que consome uma API externa. Aqui você encontrará instruções detalhadas sobre como instalar, configurar e rodar o projeto usando **Yarn** ou **npm**.

---

## 📋 Pré-requisitos  

Antes de começar, verifique se você tem as seguintes ferramentas instaladas no seu ambiente:  

- **[Node.js](https://nodejs.org/)** (versão 18.20.3 ou superior)  
- **[Yarn](https://yarnpkg.com/) (Opcional)** – Se preferir usar Yarn ao invés do npm  

Para verificar as versões instaladas, use:  

```sh
node -v
npm -v
yarn -v
```

Se precisar instalar o **Yarn**, execute:  

```sh
npm install --global yarn
```

---

## 📦 Configuração do Ambiente  

Antes de rodar o projeto, defina as variáveis de ambiente.  

1. **Crie um arquivo `.env` na raiz do projeto:**  

```sh
touch .env
```

2. **Edite o `.env` e configure a URL da API:**  

```env
REACT_APP_API_URL=http://localhost:5555/api
```
---

## 🚀 Como Rodar o Projeto  

### 🔹 Usando Yarn  

```sh
yarn install      # Instala as dependências  
yarn start          # Inicia o servidor de desenvolvimento  
```

### 🔹 Usando npm  

```sh
npm install       # Instala as dependências  
npm run start       # Inicia o servidor de desenvolvimento  
```

O projeto rodará por padrão em **http://localhost:3000/**.  

---

## 📜 Scripts Disponíveis  

Além do comando `dev`, você pode executar:  

| Comando                  | Descrição |
|--------------------------|-----------|
| `yarn build` / `npm run build` | Gera os arquivos para produção |
| `yarn start` / `npm run start` | Inicia o servidor em produção |
| `yarn lint` / `npm run lint` | Verifica erros de código |
| `yarn test` / `npm run test` | Executa os testes unitários |
| `yarn prettier-check` / `npm run prettier-check` | Verifica a formatação do codigo |
| `yarn format` / `npm run format` | Corrige todos os erros de formatação |

---

## 🛠️ Tecnologias Utilizadas  

- ⚛️ **React** - Biblioteca principal  
- 🌍 **Axios** - Consumo de API  

---

## 🧐 Dúvidas?  

Caso tenha alguma dúvida, sinta-se à vontade para abrir uma **issue** ou entrar em contato.  

🚀 **Bons códigos!** 🎉