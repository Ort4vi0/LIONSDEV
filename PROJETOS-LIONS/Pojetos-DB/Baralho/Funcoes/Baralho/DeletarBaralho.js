const Baralho = require("../../Esquemas/SchemaBaralho")
const { Retorno, RetornoErro } = require("../../Utils/Retorno")

async function DeletarBaralho(req,res){
    try {
        const id = req.params.id
        const Baralhos = Baralho.find()
        const DeletarBaralhoID = await Baralhos.findByIdAndDelete(id)
        if(!DeletarBaralhoID){
            return RetornoErro("Alguel de ID" + id + "não foi encontrado", res)
        }
        Retorno("Baralho Deletado!!", res, 200, DeletarBaralhoID)
    } catch (err){
        RetornoErro("Não foi possivel deletar o ?Baralho devido a um erro interno", res)
        console.error("não foi possivel deletar devido a um erro interno", err);
    }
}

module.exports = {DeletarBaralho}