const Aluguel = require("../../Esquemas/SchemaAluguel.js");
const { RetornoErro, Retorno } = require("../../utils/utils.js");

async function EditarAluguel(req, res) {
  try {
    const id = req.params.id;
    const NovosDados = req.body;

    const AluguelNovo = await Aluguel.findByIdAndUpdate(id, NovosDados, {
      new: true,
      runValidators: true,
    });
    console.clear();
    console.log("efefefe" + AluguelNovo);
    if (!AluguelNovo) {
      return RetornoErro(
        "Não foi possivel localizar o aluguel no sistema",
        res,
        400
      );
    }
    Retorno("Aluguel atualizado com sucesso", res, 201);
  } catch (error) {
    console.error("Não foi possivel atualizar o Aluguel.", error);
    return RetornoErro(
      `Não foi possivel atualizar o Aluguel ${error.message}`,
      res,
      400
    );
  }
}
module.exports = { EditarAluguel };
