const FlashCard = require("../../Esquemas/SchemaFlashCard");
const { RetornoErro, Retorno } = require("../../Utils/Retorno");
const mongoose = require("mongoose");

async function EditarFlahCard(req, res) {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return RetornoErro("Nenhum FlashCard foi encontrado com o ID informado.", res);
    }

    const NovosDados = req.body;

    const FlashCardAtualizado = await FlashCard.findByIdAndUpdate(
      id,
      NovosDados,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!FlashCardAtualizado) {
      return RetornoErro("Nenhum FlashCard foi encontrado com o ID informado.", res);
    }

    Retorno("FlashCard Atualizado com sucesso", res, 200, FlashCardAtualizado);
  } catch (error) {
    console.error(
      "Não foi possivel atualizar o flashcard devido a um erro interno",
      error
    );
    RetornoErro("Ocorreu um erro interno no servidor.", res);
  }
}

module.exports = { EditarFlahCard };