const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;

app.use(express.json());

const DB_PATH = 'estudantes.json';

function lerDados() {
    if (!fs.existsSync(DB_PATH)) {
        console.log('Arquivo de dados não encontrado. Criando um novo...');
        return [];
    }
    try {
        const dadosJson = fs.readFileSync(DB_PATH, 'utf-8');
        return JSON.parse(dadosJson);
    } catch (error) {
        console.error('Erro ao ler ou analisar o arquivo JSON:', error);
        return [];
    }
}


function salvarDados(dados) {
    try {
        const dadosJson = JSON.stringify(dados, null, 2);
        fs.writeFileSync(DB_PATH, dadosJson);
    } catch (error) {
        console.error('Erro ao salvar os dados:', error);
    }
}

let alunos = lerDados();

app.get('/alunos', (req, res) => {
    res.status(200).json(alunos);
});

app.post('/alunos', (req, res) => {
    const { nome, curso, ano, matricula } = req.body;

    if (!nome || !curso || !ano || !matricula) {
        return res.status(400).json({ message: 'Todos os campos (nome, curso, ano, matricula) são obrigatórios.' });
    }

    const novoAluno = {
        id: Date.now(),
        nome,
        matricula,
        curso,
        ano
    };

    alunos.push(novoAluno);
    salvarDados(alunos);
    res.status(201).json({ message: `Aluno "${novoAluno.nome}" adicionado com sucesso!`, aluno: novoAluno });
});

app.delete('/aluno/:id', (req, res) => {
    const idParaDeletar = Number(req.params.id);
    const index = alunos.findIndex(aluno => aluno.id === idParaDeletar);

    if (index === -1) {
        return res.status(404).json({ message: 'Aluno não encontrado com o ID fornecido.' });
    }

    alunos.splice(index, 1);
    salvarDados(alunos);

    res.status(200).json({ message: 'Aluno removido com sucesso!' });
});

app.patch("/aluno/:id", (req, res) => {
    const id = Number(req.params.id);
    const atualizacoes = req.body;

    const index = alunos.findIndex(aluno => aluno.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Aluno não encontrado." });
    }

    const alunoAtualizado = {
        ...alunos[index],
        ...atualizacoes
    };

    alunos[index] = alunoAtualizado;
    salvarDados(alunos);
  
    res.status(200).json({ message: `Aluno ${alunoAtualizado.nome} atualizado com sucesso`, aluno: alunoAtualizado });
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Endpoints disponíveis:');
    console.log('  - GET  /alunos');
    console.log('  - POST /alunos');
    console.log('  - DELETE /alunos/:id');
    console.log('  - PATCH /alunos/:id');
});