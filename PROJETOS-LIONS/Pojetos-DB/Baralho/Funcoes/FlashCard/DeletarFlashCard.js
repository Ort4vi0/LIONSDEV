const FlashCard = require("../../Esquemas/SchemaFlashCard");
const { RetornoArray, RetornoErro, Retorno } = require("../../Utils/Retorno");

async function DeletarFlashCard(req, res) {
    const { id } = req.params;
    try {
        const FlashCardDeletado = await FlashCard.findByIdAndDelete(id);
        if (FlashCardDeletado) {
            Retorno(`FlashCard ${id} deletado com sucesso`, res, 200, FlashCardDeletado);
        } else {
            RetornoErro("FlashCard não encontrado", res);
        }
    } catch (err) {
        console.error("Não foi possivel deletar o FlashCard");
        console.error(`${err.message}`);
        RetornoErro("Ocorreu um erro interno", res);
    }
}

module.exports = { DeletarFlashCard };