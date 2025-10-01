const express = require("express")

const { AdicionarProduto } = require("../Funcoes/Produto/AdicionarProduto.js")
const { EditarProduto } = require("../Funcoes/Produto/EditarProduto.js")

const rotas = express.Router()

rotas.post("/Produtos", AdicionarProduto)
rotas.put("/Produtos/:id", EditarProduto)

module.exports = rotas