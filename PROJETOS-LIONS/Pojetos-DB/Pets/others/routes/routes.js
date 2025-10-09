const express = require("express")
const { AddPet } = require("../../functions/AddPet.js")
const { ShowPet } = require("../../functions/ShowPets.js")
const { EditPet } = require("../../functions/EditPet.js")
const { RemovePet } = require("../../functions/RemovePet.js")

const route = express.Router()

route.post('/Pets', AddPet)
route.get('/Pets', ShowPet)
route.put(`/Pets/:id`, EditPet)
route.delete('/Pets/:id', RemovePet)

module.exports = route