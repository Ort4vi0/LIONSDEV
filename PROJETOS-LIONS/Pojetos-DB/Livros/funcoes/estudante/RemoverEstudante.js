const { LerEstudante, SalvarEstudante, RetornoErro, Retorno } = require("../../utils/utils.js")

function RemoverEstudante(req, res){
    const id = Number(req.params.id)
    const Estudantes = LerEstudante()
    const IndexEstudante = Estudantes.findIndex(estudante => estudante.ID === id)

    if(IndexEstudante === -1){
        RetornoErro("Estudante " + id + " Não encontrado!", res)
    }

    Estudantes.splice(IndexEstudante, 1)
    SalvarEstudante(Estudantes)
    Retorno("Estudante Removido!!", res)
}

module.exports = {RemoverEstudante}