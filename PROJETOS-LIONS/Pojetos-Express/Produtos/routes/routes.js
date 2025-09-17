const express = require('express')
// CAMINHOS
const { AdicionarProdutos } = require('../Funcoes/AdicionarProdutos.js')
const { RemoverProduto } = require('../Funcoes/RemoverProdutos.js')
const { EditarProduto } = require('../Funcoes/EditarProduto.js')
const { ListarProdutos } = require('../Funcoes/ListarProdutos.js')

// ROTAS
const rotas = express.Router()

rotas.post("/Estoque", AdicionarProdutos)
rotas.delete("/Estoque/:id", RemoverProduto)
rotas.put("/Estoque/:id", EditarProduto)
rotas.get("/Estoque", ListarProdutos)

module.exports = rotas