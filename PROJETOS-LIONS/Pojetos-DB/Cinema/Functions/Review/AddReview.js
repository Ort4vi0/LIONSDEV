const { default: mongoose } = require("mongoose")
const ReviewMGS = require("../../others/Schemas/SchemaReview")
const { RetornarErro, RetornarSucesso } = require("../../others/utils/utils")

async function AddReview(req,res){
    try{
        const movieid = req.params.movieid
        if(!mongoose.Types.ObjectId.isValid(movieid)){
            return RetornarErro(res, "Não foi possivel adicionar a review pois o filme nao existe no banco de dados")
        }
        const Dados = req.body
        Dados.Filme = movieid
        const Review = await ReviewMGS.create(Dados)
        RetornarSucesso(res, "Review criada com sucesso!",200,Review)
    } catch(error){
        console.error(error)
        return RetornarErro(res, "Erro interno")
    }
}

module.exports = {AddReview}