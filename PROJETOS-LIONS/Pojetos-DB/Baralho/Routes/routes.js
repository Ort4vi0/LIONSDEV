const express = require('express')
// Baralho
const { AdicionarBaralho } = require('../Funcoes/Baralho/AdicionarBaralho.js')
const { ListarBaralho } = require('../Funcoes/Baralho/ListarBaralho.js')
const { EditarBaralho } = require('../Funcoes/Baralho/EditarBaralho.js')
const { DeletarBaralho } = require('../Funcoes/Baralho/DeletarBaralho.js')
//FlashCard
const { AdicionarFlashCard } = require('../Funcoes/FlashCard/AdicionarFlashCard.js')
const { ListarFlashCards } = require('../Funcoes/FlashCard/ListarFlahsCard.js')
const { DeletarFlashCard } = require('../Funcoes/FlashCard/DeletarFlashCard.js')
const { EditarFlahCard } = require('../Funcoes/FlashCard/EditarFlashCard.js')


const rotas = express.Router()
//Baralho
rotas.post('/Baralho', AdicionarBaralho)
rotas.get('/Baralho', ListarBaralho)
rotas.put('/Baralho/:id', EditarBaralho)
rotas.delete('/Baralho/:id', DeletarBaralho )
//FlashCard
rotas.post('/FlashCard', AdicionarFlashCard)
rotas.get('/FlashCard', ListarFlashCards)
rotas.delete('/FlashCard/:id', DeletarFlashCard)
rotas.put("/FlashCard/:id", EditarFlahCard)

module.exports = rotas