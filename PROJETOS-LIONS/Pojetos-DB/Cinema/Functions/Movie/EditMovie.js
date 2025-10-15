const MovieMGS = require("../../others/Schemas/SchemaMovie")
const { RetornarSucesso, RetornarErro } = require("../../others/utils/utils")

async function EditMovie(req,res){
    try{
    const id = req.params.id
    const Dados = req.body
    const Edit = await MovieMGS.findByIdAndUpdate(id, Dados, {
        new: true,
        runValidators: true
    })
    RetornarSucesso(res, "Filme Editado com sucesso", 200, Edit)
    } catch(error){
        console.error(error)
        return RetornarErro(res, "Erro interno")
    }
}

module.exports = {EditMovie}