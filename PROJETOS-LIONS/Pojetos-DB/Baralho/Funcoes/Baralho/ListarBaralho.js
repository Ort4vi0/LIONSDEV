const Baralho = require("../../Esquemas/SchemaBaralho");
const { RetornoArray, RetornoErro } = require("../../Utils/Retorno");

async function ListarBaralho(req,res){
    try{
        const Baralhos = await Baralho.find()
        if(Baralhos != ''){
            RetornoArray(Baralhos, res, 201)
        }
        RetornoErro("Não há Baralhos cadastrados para listar", res)
    } catch(err){
        console.error("Não foi possivel listar os Baralhos")
        console.error(`${err.message}`)
        RetornoErro("Ocorreu um erro interno", res)
    }
}

module.exports = {ListarBaralho}