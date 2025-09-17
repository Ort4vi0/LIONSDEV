const { LerFilmes, RetornarErro, Retornar } = require("../utils/utils.js");

function ListarFilmes(req, res){
    const Filmes = LerFilmes()

    if(Filmes.length === 0){
        return RetornarErro("Não há Filmes Cadastrados", res)
    }

    const {Titulo, Diretor, Ano, Genero} = req.query

    let FilmesFiltrados = [...Filmes]

    if(Titulo){
        FilmesFiltrados = FilmesFiltrados.filter(Filme => Filme.Titulo === Titulo)
    }

    if(Diretor){
        FilmesFiltrados = FilmesFiltrados.filter(Filme => Filme.Diretor === Diretor)
    }

    if(Ano){
        FilmesFiltrados = FilmesFiltrados.filter(Filme => Filme.Ano === Ano)
    }

    if(Genero){
        FilmesFiltrados = FilmesFiltrados.filter(Filme => Filme.Genero === Genero)
    }

    if(FilmesFiltrados.length === 0){
        return RetornarErro("Nenhum Filme Encontrado com esses filtros", res)
    }

    const ListaFilmes = {
        FilmesEncontrados: FilmesFiltrados.length,
        Filmes: FilmesFiltrados
    }

    return Retornar(ListaFilmes, res)
}

module.exports = {ListarFilmes}