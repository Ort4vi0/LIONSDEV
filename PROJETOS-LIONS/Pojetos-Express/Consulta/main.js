const express = require('express')
const app = express()
const port = 7777
const rotas = require('./funcoes/rotas.js')

app.use(express.json())
app.use(rotas)

app.listen(port, ()=>{
    console.log("Servidor INICIADO!!")
})