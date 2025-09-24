const { LerEstudante, RetornoErro, Retorno } = require("../../utils/utils.js");

function ListarEstudante(req, res){
    const Estudantes = LerEstudante();

    if (Estudantes.length === 0){
        return RetornoErro("Não há estudantes cadastrados", res);
    }
    
    const { Nome, Matricula, Curso, Ano } = req.query;

    let estudantesFiltrados = [...Estudantes];

    if (Nome) {
        estudantesFiltrados = estudantesFiltrados.filter(estudante => 
            estudante.Nome.toLowerCase().includes(Nome.toLowerCase())
        );
    }

    if (Matricula) {
        const matriculaNumerica = parseInt(Matricula);
        if (isNaN(matriculaNumerica)) {
            return RetornoErro("O parâmetro 'Matricula' deve ser um número válido.", res);
        }
        estudantesFiltrados = estudantesFiltrados.filter(estudante => estudante.Matricula === matriculaNumerica);
    }

    if (Curso) {
        estudantesFiltrados = estudantesFiltrados.filter(estudante => 
            estudante.Curso.toLowerCase().includes(Curso.toLowerCase())
        );
    }

    if (Ano) {
        const anoNumerico = parseInt(Ano);
        if (isNaN(anoNumerico)) {
            return RetornoErro("O parâmetro 'Ano' deve ser um número válido.", res);
        }
        estudantesFiltrados = estudantesFiltrados.filter(estudante => estudante.Ano === anoNumerico);
    }

    if (estudantesFiltrados.length === 0) {
        return RetornoErro("Nenhum estudante encontrado com os filtros especificados.", res);
    }

    const ListaEstudantes = {
        EstudantesEncontrados: estudantesFiltrados.length,
        Estudantes: estudantesFiltrados
    };
    
    return Retorno(ListaEstudantes, res);
}

module.exports = {ListarEstudante};