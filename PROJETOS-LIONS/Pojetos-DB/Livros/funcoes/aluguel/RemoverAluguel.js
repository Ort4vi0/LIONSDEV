const { LerAluguel, RetornoErro, SalvarAluguel, Retorno } = require("../../utils/utils.js")

function RemoverAluguel(req, res){
    const id = Number(req.params.id)
    const Alugueis = LerAluguel()
    const IndexAluguel = Alugueis.findIndex(aluguel => aluguel.ID === id)
    
    if(IndexAluguel === -1){
        RetornoErro("Aluguel não consta no sistema", res)
    }

    Alugueis.splice(IndexAluguel, 1)
    SalvarAluguel(Alugueis)
    Retorno("Aluguel removido!!!", res)
}

module.exports = {RemoverAluguel}