const express = require('express')
const fs = require('fs');
const app = express();
const port = 8080;

app.use(express.json());
const DBMASTER = 'livros.json';

function lerDados() {
    if (!fs.existsSync(DBMASTER)) {
        return [];
    }
    const dadosJson = fs.readFileSync(DBMASTER, 'utf-8');
    if (!dadosJson) {
        return [];
    }
    return JSON.parse(dadosJson);
}

function salvarDados(dados) {
    const dadosJson = JSON.stringify(dados, null, 2);
    fs.writeFileSync(DBMASTER, dadosJson);
}

app.get('/livros', (req, res) => {
    const instrucoes = `
        API de Livros:
        - GET /livros/listar: Para listar os livros existentes.
        - POST /livros: Para adicionar um novo livro (enviar dados em JSON).
        - DELETE /livros/:id: Para deletar um livro pelo ID.
        - PUT /livros/:id: Para atualizar um livro pelo ID.
    `;
    res.type('text/plain').send(instrucoes);
});

app.post('/livros', (req, res) => {
    const { titulo, autor, ano, genero } = req.body;

    if (!titulo || !autor || !ano || !genero) {
        return res.status(400).json({ message: 'Todos os campos (titulo, autor, ano, genero) são obrigatórios.' });
    }

    const livros = lerDados();

    const novoLivro = {
        id: Date.now(),
        titulo,
        autor,
        ano,
        genero
    };

    livros.push(novoLivro);
    salvarDados(livros);
    res.status(201).send(`Livro "${novoLivro.titulo}" adicionado`);
});

app.delete('/livros/:id', (req, res) => {
    const idParaDeletar = Number(req.params.id);
    const livros = lerDados();

    const livroIndex = livros.findIndex(livro => livro.id === idParaDeletar);

    if (livroIndex === -1) {
        return res.status(404).json({ message: 'Livro não encontrado com o ID fornecido.' });
    }

    livros.splice(livroIndex, 1);

    salvarDados(livros);

    res.status(200).json({ message: 'Livro deletado com sucesso!' });
});


app.patch("/livros/:id", (req, res) => {
    try {
      const id = Number(req.params.id);
      const atualizacoes = req.body;

      const livros = lerDados();

      const livroIndex = livros.findIndex(livro => livro.id === id);

      if (livroIndex === -1) {
        return res.status(404).json({ message: "Livro não encontrado." });
      }

      const livroOriginal = livros[livroIndex];
      const livroAtualizado = {
          ...livroOriginal,
          ...atualizacoes,
          id: livroOriginal.id
      };

      livros[livroIndex] = livroAtualizado;

      salvarDados(livros);
  
      res.status(200).send(`Livro ${livroAtualizado.titulo} atualizado com sucesso`);
      
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  app.get('/livros/listar', (req, res) => {
    const livros = lerDados();
    res.status(201).json(livros);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});