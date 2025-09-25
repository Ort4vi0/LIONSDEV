const Estudante = require("../../Esquemas/SchemaEstudante.js")
const {Retorno, RetornoErro} = require("../../utils/utils.js")

async function RemoverEstudante(req, res){
    try
    {    const id = req.params.id
        const Estudantes = Estudante.find()
        const RemoverEstudante = await Estudantes.findByIdAndDelete(id)
        if(!RemoverEstudante){
            return RetornoErro("Não foi possivel encontrar o estudante de ID: " + id,res)
        }
        Retorno("Estudante Removido!!", res, 200, RemoverEstudante)
    } catch(error){
        console.error("Erro intrno", error)
        return RetornoErro("Erro Interno", res)
    }
}

module.exports = {RemoverEstudante}