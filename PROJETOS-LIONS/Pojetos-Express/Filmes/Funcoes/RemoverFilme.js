const { LerFilmes, RetornarErro, SalvarFilmes, Retornar } = require("../utils/utils.js")

function RemoverFilme(req,res){
    const id = Number(req.params.id)
    const Filmes = LerFilmes()

    const FilmesIndex = Filmes.findIndex(Filme => Filme.ID === id)
    if(FilmesIndex === -1){
        return RetornarErro("Não foi encontrado nenhum Filme com o id: " + id, res)
    }

    Filmes.splice(FilmesIndex,1)
    SalvarFilmes(Filmes)
    Retornar("Filme Removido com sucesso!!", res)
}

module.exports = {RemoverFilme}