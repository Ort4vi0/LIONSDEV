const express = require('express')
const { AdicionarLivro } = require('./livro/AdicionarLivro.js')
const { RemoverLivro } = require('./livro/RemoverLivro.js')
const { ListarLivros } = require('./livro/ListarLivros.js')
const { EditarLivro } = require('./livro/EditarLivro.js')

const { AdicionarEstudante } = require('./estudante/AdicionarEstudante.js')
const { RemoverEstudante } = require('./estudante/RemoverEstudante.js')
const { ListarEstudante } = require('./estudante/ListarEstudante.js')
const { EditarEstudante } = require('./estudante/EditarEstudante.js')

const { AdicionarAluguel } = require('./aluguel/AdicionarAluguel.js')
const { RemoverAluguel } = require('./aluguel/RemoverAluguel.js')
const { EditarAluguel } = require('./aluguel/EditarAluguel.js')
const { ListarAlguel } = require('./aluguel/ListarAluguel.js')


const rotas = express.Router()

rotas.post('/Biblioteca/Livro', AdicionarLivro)
rotas.delete('/Biblioteca/Livro/:id', RemoverLivro)
rotas.get('/Biblioteca/Livro/', ListarLivros)
rotas.put("/Biblioteca/Livro/:id", EditarLivro)

rotas.post('/Biblioteca/Estudante', AdicionarEstudante)
rotas.delete('/Biblioteca/Estudante/:id', RemoverEstudante)
rotas.get("/Biblioteca/Estudante", ListarEstudante)
rotas.put("/Biblioteca/Estudante/:id", EditarEstudante)

rotas.post('/Biblioteca/Aluguel', AdicionarAluguel)
rotas.delete('/Biblioteca/Aluguel/:id', RemoverAluguel)
rotas.get("/Biblioteca/Aluguel", ListarAlguel)
rotas.put("/Biblioteca/Aluguel/:id", EditarAluguel)


module.exports = rotas