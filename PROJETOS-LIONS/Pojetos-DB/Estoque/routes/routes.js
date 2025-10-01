const express = require("express")

const { AdicionarProduto } = require("../Functions/Product/AddProduct.js")
const { EditarProduto } = require("../Functions/Product/EditProduct.js")
const { AddProductAmount } = require("../Functions/Product/AddProductAmount.js")
const { GetProduct } = require("../Functions/Product/GetProduct.js")
const { RemProductAmount } = require("../Functions/Product/RemProductAmount.js")
const { Historyc } = require("../Functions/Movimentation/History.js")

const rotas = express.Router()

rotas.get("/Produtos", GetProduct)
rotas.post("/Produtos", AdicionarProduto)
rotas.put("/Produtos/:id", EditarProduto)
rotas.post("/Produtos/:id/entrada", AddProductAmount)
rotas.post("/Produtos/:id/saida", RemProductAmount)

rotas.post("/effefe/:id", Historyc)



module.exports = rotas