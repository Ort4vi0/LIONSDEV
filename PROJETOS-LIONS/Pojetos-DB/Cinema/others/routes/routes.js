const express = require("express")
const { AddMovie } = require("../../Functions/AddMovie.js")

const route = express.Router()

route.post('/Cinema', AddMovie)

module.exports = route