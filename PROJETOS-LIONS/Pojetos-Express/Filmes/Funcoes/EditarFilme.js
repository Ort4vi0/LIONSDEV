const { LerFilmes, RetornarErro, SalvarFilmes, Retornar } = require("../utils/utils.js")

function EditarFilme(req, res){
    const {Titulo, Diretor, Ano, Genero} = req.body
    if(!Titulo|| !Diretor|| !Ano || !Genero){
        return RetornarErro("Obrigatorio conter Titulo, Diretor, Ano, Genero!!", res)
    }
    const id = Number(req.params.id)
    const Filmes = LerFilmes()
    const FilmesIndex = Filmes.findIndex(Filme => Filme.ID === id)
    if(FilmesIndex === -1){
        return RetornarErro("Não foi encontrado Filme com o ID: " + id, res)
    }

    const NovoFilme = {
        ID: id,
        Titulo: Titulo,
        Diretor: Diretor,
        Ano: parseInt(Ano),
        Genero
    }

    Filmes[FilmesIndex] = NovoFilme
    SalvarFilmes(Filmes)
    Retornar("Filme Atualizado!!!", res)
}

module.exports = {EditarFilme}