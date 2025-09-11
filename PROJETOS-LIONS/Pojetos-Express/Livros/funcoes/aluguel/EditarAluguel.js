const { LerAluguel, RetornoErro, SalvarAluguel, Retorno } = require("../../utils/utils.js")

function EditarAluguel(req, res){
    const {Livro, Estudante, DiasAjuste} = req.body
    if(!Livro || !Estudante || DiasAjuste === undefined){
        RetornoErro("Necessario conter Livro, Estudante, DiasAjuste", res)
    }
    const id = Number(req.params.id)
    const Alugueis = LerAluguel()
    const IndexAluguel = Alugueis.findIndex(aluguel => aluguel.ID === id)
    if(IndexAluguel === -1){
        RetornoErro("Não existe aluguel com esse ID", res)
    }

    const aluguelExistente = Alugueis[IndexAluguel]

    const DataDevolucaoAtual = new Date(aluguelExistente .DataDevolucao)
    DataDevolucaoAtual.setDate(DataDevolucaoAtual.getDate() + parseInt(DiasAjuste))

    const AluguelAtualizado = {
        ...aluguelExistente,
        Livro: Livro,
        Estudante: Estudante,
        DataDevolucao: DataDevolucaoAtual.toISOString()
    }

    Alugueis[IndexAluguel] = AluguelAtualizado
    SalvarAluguel(Alugueis)
    Retorno("Aluguel Atualizado", res)
}

module.exports = {EditarAluguel}