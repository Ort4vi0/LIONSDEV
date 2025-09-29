const express = require('express')
// Baralho
const { AdicionarBaralho } = require('../Funcoes/Baralho/AdicionarBaralho.js')
const { ListarBaralho } = require('../Funcoes/Baralho/ListarBaralho.js')
const { EditarBaralho } = require('../Funcoes/Baralho/EditarBaralho.js')
const { DeletarBaralho } = require('../Funcoes/Baralho/DeletarBaralho.js')
//FlashCard
const { AdicionarFlashCard } = require('../Funcoes/FlashCard/AdicionarFlashCard.js')


const rotas = express.Router()
//Baralho
rotas.post('/Baralho', AdicionarBaralho)
rotas.get('/Baralho', ListarBaralho)
rotas.put('/Baralho/:id', EditarBaralho)
rotas.delete('/Baralho/:id', DeletarBaralho )
//FlashCard
rotas.post('/FlashCard', AdicionarFlashCard)

module.exports = rotas