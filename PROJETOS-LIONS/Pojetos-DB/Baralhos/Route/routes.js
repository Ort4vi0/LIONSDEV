const express = require('express')

//FlashCard
const { AdicionarFlashCard } = require('../Funcoes/FlashCard/Adicionar.js')
//Baralho
const { AdicionarBaralho } = require('../Funcoes/Baralho/Adicionar.js')

const rotas = express.Router()

//FlashCard
rotas.post("/Baralho/FlashCard/:id", AdicionarFlashCard)

//Baralho
rotas.post("/Baralho", AdicionarBaralho)

module.exports = rotas