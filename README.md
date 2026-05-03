# Scalable Backend API

Este é um projeto de API robusta e escalável desenvolvida com **Node.js** e **TypeScript**, focada em alta performance e facilidade de manutenção. A aplicação utiliza **Prisma ORM** para interação com o banco de dados e inclui uma suíte de testes de carga com **k6**.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript.
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript com tipagem estática.
- [Prisma](https://www.prisma.io/) - ORM (Object-Relational Mapping) moderno.
- [Dotenv](https://github.com/motdotla/dotenv) - Gerenciamento de variáveis de ambiente.
- [k6](https://k6.io/) - Ferramenta de teste de carga e performance.

## 📦 Instalação e Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/scalable-backend-api.git
   cd scalable-backend-api
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configuração do Ambiente:**
   Crie um arquivo `.env` na raiz do projeto e configure a conexão com o banco de dados e outras variáveis necessárias:
   ```ini
   DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
   ```

4. **Migrações do Banco de Dados:**
   Execute o Prisma para preparar o banco de dados:
   ```bash
   npx prisma migrate dev
   ```

## 🛠️ Execução

Para rodar o servidor em ambiente de desenvolvimento:
```bash
npm run dev
```

## 📊 Testes de Performance

O projeto conta com um script de teste de carga localizado em `k6/performance-test.js`. Ele simula múltiplos usuários simultâneos no endpoint de criação de produtos (`POST /products`).

Para executar os testes de performance:
```bash
k6 run k6/performance-test.js
```

### Cenário de Teste:
- **Rampa de subida:** 50 usuários em 30 segundos.
- **Manutenção de carga:** 50 usuários por 1 minuto.
- **Rampa de descida:** Redução para 0 usuários em 30 segundos.
- **Thresholds:** Falha se mais de 5% das requisições errarem ou se o p(95) da duração for > 500ms.

## 💎 Interface de Dados
Você pode visualizar e gerenciar os dados facilmente utilizando o Prisma Studio:
```bash
npx prisma studio
```