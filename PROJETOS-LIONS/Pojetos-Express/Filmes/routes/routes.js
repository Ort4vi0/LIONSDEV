const express = require('express')
// CAMINHOS
const { AdicionarFilmes } = require('../Funcoes/AdicionarFilme.js')
const { RemoverFilme } = require('../Funcoes/RemoverFilme.js')
const { EditarFilme } = require('../Funcoes/EditarFilme.js')
const { ListarFilmes } = require('../Funcoes/ListarFilme.js')

// ROTAS
const rotas = express.Router()

rotas.post("/Catalogo", AdicionarFilmes)
rotas.delete("/Catalogo/:id", RemoverFilme)
rotas.put("/Catalogo/:id", EditarFilme)
rotas.get("/Catalogo", ListarFilmes)

module.exports = rotas