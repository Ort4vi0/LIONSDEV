const { RetornarErro, LerFilmes, SalvarFilmes, Retornar } = require("../utils/utils.js")

function AdicionarFilmes(req, res){
    const {Titulo, Diretor, Ano, Genero} = req.body
    if(!Titulo|| !Diretor|| !Ano || !Genero){
        return RetornarErro("Obrigatorio conter Titulo, Diretor, Ano, Genero!!", res)
    }

    const Filmes = LerFilmes()

    const Filme = {
        ID: Date.now(),
        Titulo: Titulo,
        Diretor: Diretor,
        Ano: parseInt(Ano),
        Genero
    }

    Filmes.push(Filme)
    SalvarFilmes(Filmes)
    Retornar("Filme Adicionado!!!!", res)
}

module.exports = {AdicionarFilmes}