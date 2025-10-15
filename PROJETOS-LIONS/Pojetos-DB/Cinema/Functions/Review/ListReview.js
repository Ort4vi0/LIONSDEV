const ReviewMGS = require("../../others/Schemas/SchemaReview");
const { RetornarErro, RetornarSucesso } = require("../../others/utils/utils");

async function ListReview(req,res){
    try{
        const Reviews = await ReviewMGS.find(req.query)
        if(Reviews.length < 1){
            return RetornarErro(res, "Não foi possivel listar nada com os parametros requeridos")
        }
        RetornarSucesso(res, Reviews)
    } catch(error){
        console.error(error)
        return RetornarErro(res, "Erro interno")
    } 
}

module.exports = {ListReview}