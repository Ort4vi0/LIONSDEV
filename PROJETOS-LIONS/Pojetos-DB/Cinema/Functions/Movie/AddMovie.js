const MovieMGS = require("../../others/Schemas/SchemaMovie.js")
const { RetornarSucesso, RetornarErro } = require("../../others/utils/utils.js")

async function AddMovie(req,res){
    try{
        const Dados = req.body
        const NewMovie = await MovieMGS.create(Dados)
        RetornarSucesso(res, `Filme ${Dados.Titulo} adicionado com sucesso`, 200, NewMovie)
    } catch(error){
        console.error(error)
        if(error.code === 11000){
            return RetornarErro(res, "Já existe esse filme no banco de dados")
        }
        return RetornarErro(res, "Erro interno")
    }
}

module.exports = {AddMovie}