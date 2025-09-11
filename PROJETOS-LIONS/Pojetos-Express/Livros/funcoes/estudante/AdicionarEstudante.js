const { LerEstudante, SalvarEstudante, RetornoErro, Retorno } = require("../../utils/utils.js")

function AdicionarEstudante(req, res){
    const {Nome, Matricula, Curso, Ano} = req.body
    const Estudantes = LerEstudante()
    if(!Nome || !Matricula || !Curso || !Ano){
        RetornoErro("Necessário conter Nome, Matricula, Curso, Ano", res)
    }

    const Estudante = {
        ID: Date.now(),
        Nome: Nome,
        Matricula: Matricula,
        Curso: Curso,
        Ano: Ano
    }

    Estudantes.push(Estudante)
    SalvarEstudante(Estudantes)
    Retorno("Estudante Cadastrado!!", res)
}

module.exports = {AdicionarEstudante}