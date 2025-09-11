const { LerAluguel, LerEstudante, LerLivro, SalvarAluguel, Retorno, RetornoErro } = require("../../utils/utils.js")

function AdicionarAluguel(req, res){
    const {Livro, Estudante, DiasParaDevolver} = req.body
    const Alugueis = LerAluguel()
    const Estudantes = LerEstudante()
    const Livros = LerLivro()
    if(!Livro || !Estudante || DiasParaDevolver === undefined){
        RetornoErro("Necessario conter Livro, Estudante, DiasParaDevolver", res)
    }
    const VerificarLivro = Livros.findIndex((livro) => livro.ID === Livro )
    if (VerificarLivro === -1){
        RetornoErro("Livro não encontrado no sistema", res)
    }
    const VerificarEstudante = Estudantes.findIndex((estudante) => estudante.ID === Estudante )
    if (VerificarEstudante === -1){
        RetornoErro("Estudante não cadastrado no sistema", res)
    }

    const DataAtual = new Date()
    const DataDevolucao = new Date(DataAtual)
    DataDevolucao.setDate(DataAtual.getDate() + parseInt(DiasParaDevolver))

    const Alugado = {
        ID: Date.now(),
        Livro: Livro,
        Estudante: Estudante,
        DataAluguel: DataAtual.toISOString(),
        DataDevolucao: DataDevolucao.toISOString()
    }

    Alugueis.push(Alugado)
    SalvarAluguel(Alugueis)
    Retorno("Livro Alugado com sucesso", res)
}

module.exports = {AdicionarAluguel}