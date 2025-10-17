const Aluguel = require("../../Esquemas/SchemaAluguel.js");
const { RetornoErro, RetornoArray } = require("../../utils/utils.js");

async function ListarAlguel(req, res) {
  try {
    const Alugueis = await Aluguel.find();
    if (Alugueis != "") {
      return RetornoArray(Alugueis, res, 201);
    }
    RetornoErro("Não há Aluguels cadastrados", res, 500);
  } catch (error) {
    console.error("Não foi possivel listar os Alugueis", error);
    console.error(`${error.message}`);
    RetornoErro("Ocorreu um erro interno" + `${error.message}`, res, 500);
  }
}

module.exports = { ListarAlguel };
