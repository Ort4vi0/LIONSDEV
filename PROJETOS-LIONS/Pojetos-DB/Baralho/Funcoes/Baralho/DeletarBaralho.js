const Baralho = require("../../Esquemas/SchemaBaralho.js")
const FlashCard = require("../../Esquemas/SchemaFlashCard.js")
const { RetornoErro, Retorno } = require("../../Utils/Retorno.js")

async function DeletarBaralho(req, res) {
    const { id } = req.params
    
    if (!id) {
        return RetornoErro("Necessário fornecer o ID do baralho", res, 400)
    }

    try {
        const baralhoExistente = await Baralho.findById(id)
        if (!baralhoExistente) {
            return RetornoErro("Baralho não encontrado", res, 404)
        }

        const flashcardsRemovidos = await FlashCard.deleteMany({ IDBaralho: id })
        
        await Baralho.findByIdAndDelete(id)

        Retorno(
            `Baralho "${baralhoExistente.Nome}" deletado com sucesso junto com ${flashcardsRemovidos.deletedCount} flashcard(s) associado(s)`, 
            res, 
            200,
            { 
                baralhoRemovido: baralhoExistente,
                flashcardsRemovidos: flashcardsRemovidos.deletedCount
            }
        )
        
    } catch (err) {
        console.error("Erro ao deletar o baralho:", err)
        RetornoErro(`Erro ao deletar o baralho: ${err.message}`, res, 500)
    }
}

module.exports = { DeletarBaralho }
