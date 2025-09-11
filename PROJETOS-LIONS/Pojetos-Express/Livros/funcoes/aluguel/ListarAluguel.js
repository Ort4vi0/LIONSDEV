const { LerAluguel, RetornoErro, Retorno } = require("../../utils/utils.js");

function ListarAlguel(req, res){
    const Alugueis = LerAluguel();

    if (Alugueis.length === 0){
        return RetornoErro("Não há aluguéis para serem listados", res);
    }
    
    const { Livro, Estudante, DataAluguel, DataDevolucao } = req.query;

    let alugueisFiltrados = [...Alugueis];

    if (Livro) {
        const idLivro = parseInt(Livro);
        if (isNaN(idLivro)) {
            return RetornoErro("O ID do livro deve ser um número válido.", res);
        }
        alugueisFiltrados = alugueisFiltrados.filter(aluguel => aluguel.Livro === idLivro);
    }

    if (Estudante) {
        const idEstudante = parseInt(Estudante);
        if (isNaN(idEstudante)) {
            return RetornoErro("O ID do estudante deve ser um número válido.", res);
        }
        alugueisFiltrados = alugueisFiltrados.filter(aluguel => aluguel.Estudante === idEstudante);
    }

    if (DataAluguel) {
        alugueisFiltrados = alugueisFiltrados.filter(aluguel => 
            aluguel.DataAluguel.startsWith(DataAluguel)
        );
    }

    if (DataDevolucao) {
        alugueisFiltrados = alugueisFiltrados.filter(aluguel => 
            aluguel.DataDevolucao.startsWith(DataDevolucao)
        );
    }

    if (alugueisFiltrados.length === 0) {
        return RetornoErro("Nenhum aluguel encontrado com os filtros especificados.", res);
    }

    const Lista = {
        LivrosEncontrados: alugueisFiltrados.length,
        Alugueis: alugueisFiltrados
    };
    
    return Retorno(Lista, res);
}

module.exports = {ListarAlguel};