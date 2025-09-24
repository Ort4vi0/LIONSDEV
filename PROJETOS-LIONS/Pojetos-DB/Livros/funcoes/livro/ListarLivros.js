const { LerLivro, RetornoErro, Retorno } = require("../../utils/utils.js");

function ListarLivros(req, res){
    const livros = LerLivro();

    if (livros.length === 0){
        return RetornoErro("Não há livros cadastrados", res);
    }

    const { Genero, Ano, Autor } = req.query;

    let livrosFiltrados = [...livros];

    if (Genero) {
        livrosFiltrados = livrosFiltrados.filter(livro => livro.Genero === Genero);
    }

    if (Ano) {
        const anoNumerico = parseInt(Ano);
        if (isNaN(anoNumerico)) {
            return RetornoErro("O parâmetro 'Ano' deve ser um número válido.", res);
        }
        livrosFiltrados = livrosFiltrados.filter(livro => livro.Ano === anoNumerico);
    }

    if (Autor) {
        livrosFiltrados = livrosFiltrados.filter(livro => 
            livro.Autor.toLowerCase().includes(Autor.toLowerCase())
        );
    }

    if (livrosFiltrados.length === 0) {
        return RetornoErro("Nenhum livro encontrado com os filtros especificados.", res);
    }

    const ListaLivros = {
        LivrosEncontrados: livrosFiltrados.length,
        Livros: livrosFiltrados
    };
    
    return Retorno(ListaLivros, res);
}

module.exports = {ListarLivros};