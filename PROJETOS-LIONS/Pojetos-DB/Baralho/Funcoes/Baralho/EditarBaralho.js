const { default: mongoose } = require("mongoose");
const Baralho = require("../../Esquemas/SchemaBaralho");
const { RetornoErro, Retorno } = require("../../Utils/Retorno");

async function EditarBaralho(req, res) {
  try {
    const id = req.params.id;
    const NovosDados = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
          return RetornoErro("Nenhum FlashCard foi encontrado com o ID informado.", res);
        }

    const BaralhoAtualizado = await Baralho.findByIdAndUpdate(id, NovosDados, {
      new: true,
      runValidators: true,
    });

    if (!BaralhoAtualizado) {
      return RetornoErro("Baralho não foi encontrado", res);
    }
    Retorno("Baralho Atualizado", res);
  } catch (error) {
    console.error("Não foi possivel localizar o baralho.", error);
    return RetornoErro(
      `Não foi possivel atualizar o baralho ${error.message}`,
      res
    );
  }
}

module.exports = { EditarBaralho };
