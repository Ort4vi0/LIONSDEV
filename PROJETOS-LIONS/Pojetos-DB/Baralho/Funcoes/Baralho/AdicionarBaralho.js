const Baralho = require("../../Esquemas/SchemaBaralho.js")
const { RetornoErro, Retorno } = require("../../Utils/Retorno.js")

async function AdicionarBaralho(req,res){
    const {Nome} = req.body
    if(!Nome){
        return RetornoErro("Necessário conter o Nome do baralho", res)
    }
    const baralhoExistente = await Baralho.findOne({ Nome: Nome });
    if (baralhoExistente) {
       return RetornoErro(`Um baralho com o nome "${Nome}" já existe.`, res, 409); // 409 é o código para "Conflito"
    }

    const BaralhoNovo = new Baralho({
        Nome: Nome
    })

    try{
        const SalvarBaralho = await BaralhoNovo.save()
        Retorno(`Baralho ${Nome} Criado com sucesso`, res, 201, SalvarBaralho)
    } catch (err){
        console.error("Erro ao salvar o Baralho", err)
        RetornoErro(`Erro ao salvar o baralho no banco de dados: ${err.message}`, res, 500)
    }
}

module.exports = {AdicionarBaralho}