const Aluguel = require("../../Esquemas/SchemaAluguel.js")
const {RetornoErro, Retorno } = require("../../utils/utils.js")

async function RemoverAluguel(req, res){
    try
    {
        const id = req.params.id
        const Alugueis = Aluguel.find()
        const DeletarAluguel = await Alugueis.findByIdAndDelete(id)
        console.log(DeletarAluguel)
        if(!DeletarAluguel){
            return RetornoErro("Aluguel de ID" + id + "não encontrado!!", res)
        }
        Retorno("Aluguel deletado do sistema", res, 200 ,DeletarAluguel)
    }catch(error){
        RetornoErro("não foi possivel deletar devido a um erro interno",res)
        console.error("não foi possivel deletar devido a um erro interno", error)
        }
}

module.exports = {RemoverAluguel}