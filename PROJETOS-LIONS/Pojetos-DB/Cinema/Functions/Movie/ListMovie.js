const MovieMGS = require("../../others/Schemas/SchemaMovie.js");
const { RetornarSucesso, RetornarErro } = require("../../others/utils/utils.js");

async function listMovies(req, res){
    const Movies = await MovieMGS.find(req.query)
    if(Movies.length === 0){
        RetornarErro(res, "Não foi possivel localizar nenhum filme com os parametros requeridos")
    }
    RetornarSucesso(res, Movies)
}

module.exports = {listMovies}