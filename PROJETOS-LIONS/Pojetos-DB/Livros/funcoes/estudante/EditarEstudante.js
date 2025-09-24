const { LerEstudante, RetornoErro, SalvarEstudante, Retorno } = require("../../utils/utils.js")

function EditarEstudante(req, res){
    const {Nome, Matricula, Curso, Ano} = req.body
    if(!Nome || !Matricula || !Curso || !Ano){
        RetornoErro("Os campos Nome, Matricula, Curso, Ano são necessarios", res)
    }
    const id = Number(req.params.id)
    const Estudantes = LerEstudante()
    const IndexEstudante = Estudantes.findIndex(estudante => estudante.ID === id)
    if(IndexEstudante === -1){
        RetornoErro("Estudante " + id + " Não foi encontrado!!", res)
    }

    const NovoEstudante = {
        ID: id,
        Nome: Nome,
        Matricula: Matricula,
        Curso: Curso,
        Ano: Ano
    }

    Estudantes[IndexEstudante] = NovoEstudante
    SalvarEstudante(Estudantes)
    Retorno("Estudante Editado", res)
}

module.exports = {EditarEstudante}