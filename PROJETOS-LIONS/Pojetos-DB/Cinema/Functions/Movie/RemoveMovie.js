const MovieMGS = require("../../others/Schemas/SchemaMovie")
const { RetornarSucesso, RetornarErro } = require("../../others/utils/utils")

async function RemoveMovie(req,res){
    try{
    const id = req.params.id
    const Delete = await MovieMGS.findByIdAndDelete(id)
    RetornarSucesso(res, "O filme foi deletado com sucesso!", 200, Delete)
    } catch(error){
        console.error(error)
        return RetornarErro(res, "Erro intero")
    }
}

module.exports = {RemoveMovie}