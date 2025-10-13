const MovieMGS = require("../others/Schemas/Schema.js")
const { RetornarSucesso } = require("../others/utils/utils.js")

async function AddMovie(req,res){
    const Dados = req.body
    const NewMovie = MovieMGS.create(Dados)
    RetornarSucesso(res, `Filme ${Dados.Titulo} adicionado com sucesso`, 200, NewMovie)
}

module.exports = {AddMovie}