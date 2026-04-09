const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const PORT = 3000;
const FILE = './tasks.json';

// Função para ler tarefas
function readTasks() {
    const data = fs.readFileSync(FILE);
    return JSON.parse(data);
}

// Função para salvar tarefas
function saveTasks(tasks) {
    fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
}

// GET - listar tarefas
app.get('/tasks', (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

// POST - criar tarefa
app.post('/tasks', (req, res) => {
    const tasks = readTasks();
    const newTask = {
        id: Date.now(),
        title: req.body.title
    };

    tasks.push(newTask);
    saveTasks(tasks);

    res.status(201).json(newTask);
});

// DELETE - remover tarefa
app.delete('/tasks/:id', (req, res) => {
    let tasks = readTasks();
    tasks = tasks.filter(task => task.id != req.params.id);

    saveTasks(tasks);
    res.json({ message: 'Tarefa removida' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});