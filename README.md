# API de Tarefas com Node.js e Express

API simples de gerenciamento de tarefas (To-Do List) desenvolvida com Node.js e Express, salvando dados em arquivo JSON.

## 🚀 Tecnologias
- Node.js
- Express
- JavaScript
- JSON

## 📌 Funcionalidades
- Listar todas as tarefas
- Criar nova tarefa
- Deletar tarefa

## ▶️ Como rodar o projeto

npm install
node server.js

Servidor roda em:
http://localhost:3000

## 🔗 Rotas da API

### GET /tasks
Lista todas as tarefas

### POST /tasks
Cria uma nova tarefa

Body JSON:
{
  "title": "Minha tarefa"
}

### DELETE /tasks/:id
Deleta uma tarefa pelo ID

## 🧪 Testado com Postman
