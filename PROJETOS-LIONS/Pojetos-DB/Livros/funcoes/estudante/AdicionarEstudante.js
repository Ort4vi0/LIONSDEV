const Estudante = require("../../Esquemas/SchemaEstudante.js")
const {RetornoErro, Retorno } = require("../../utils/utils.js")

async function AdicionarEstudante(req, res){
    const {Nome, Matricula, Curso, Ano} = req.body
    if(!Nome || !Matricula || !Curso || !Ano){
        return RetornoErro("Necessário conter Nome, Matricula, Curso, Ano", res)
    }

    const EstudanteNovo = new Estudante ({
        Nome: Nome,
        Matricula: Matricula,
        Curso: Curso,
        Ano: Ano
    })

    try {
        const EstudanteSalvo = await EstudanteNovo.save()
        Retorno("Estudante adicionado!", res, 201, EstudanteSalvo) 
    } catch (error){
        console.error("Erro ao salvar o Estudante", error)
        RetornoErro(`Erro ao salvar o Estudante no banco de dados: ${error.message}`, res, 500)
    }

}

module.exports = {AdicionarEstudante}