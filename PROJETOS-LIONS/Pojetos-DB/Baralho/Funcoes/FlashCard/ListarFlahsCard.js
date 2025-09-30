const FlashCard = require("../../Esquemas/SchemaFlashCard");
const { RetornoErro, RetornoArray } = require("../../Utils/Retorno");

async function ListarFlashCards(req, res) {
    try{
        const FlashCards = await FlashCard.find()
        if(FlashCards != ''){
            RetornoArray(FlashCards, res, 201)
        }else{
            RetornoErro("Não há Flash Cards cadastrados para listar", res)
        }
    } catch(err){
        console.error("Não foi possivel listar os Flash Cards")
        console.error(`${err.message}`)
        RetornoErro("Ocorreu um erro interno", res)
    }
}

module.exports = {ListarFlashCards} 