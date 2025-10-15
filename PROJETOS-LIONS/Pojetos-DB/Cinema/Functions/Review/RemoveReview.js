const ReviewMGS = require("../../others/Schemas/SchemaReview")
const { RetornarSucesso, RetornarErro } = require("../../others/utils/utils")

async function RemoveReview(req,res){
    try{
    const id = req.params.id
    const VerifyId = ReviewMGS.findById(id)
    if(!VerifyId){
        return RetornarErro(res, "Não existe nenhuma review com esse IID")
    }
    const Remove = await ReviewMGS.findByIdAndDelete(id)
    RetornarSucesso(res, `A Review ${id} foi removida`,200, Remove)
    } catch(error){
        return RetornarErro(res, "Erro Interno")
    }
}

module.exports = {RemoveReview}