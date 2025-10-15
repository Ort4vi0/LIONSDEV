const { default: mongoose } = require("mongoose")
const ReviewMGS = require("../../others/Schemas/SchemaReview")
const { RetornarSucesso, RetornarErro } = require("../../others/utils/utils")

async function EditReview(req,res){
    try{
    const id = req.params.id
    const Dados = req.body
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return RetornarErro(res, "Não foi possivel editar pois esse Review não existe")
    }
    
    const Edit = await ReviewMGS.findByIdAndUpdate(id, Dados, {
        new: true,
        runValidators: true
    })
    RetornarSucesso(res, `O seu Review(${id}) foi edtado com sucesso!`, 200, Edit)
    } catch(error){
        console.error(error)
        return RetornarErro(res, "Erro interno")
    }
}

module.exports = {EditReview}