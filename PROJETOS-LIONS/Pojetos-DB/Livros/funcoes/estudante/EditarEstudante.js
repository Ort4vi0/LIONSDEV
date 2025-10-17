const Estudante = require("../../Esquemas/SchemaEstudante.js");
const { RetornoErro, Retorno } = require("../../utils/utils.js");

async function EditarEstudante(req, res) {
  try {
    const id = req.params.id;
    const Dados = req.body;

    const EstudanteNovo = Estudante.findByIdAndUpdate(id, Dados, {
      new: true,
      runValidators: true,
    });
    if (!EstudanteNovo) {
      return RetornoErro("Não foi possivel localziar o livro", res, 500);
    }
    Retorno("Livro atualizado com sucesso", 201);
  } catch (error) {
    console.error("Não foi possivel atualizar o Estudante.", error);
    return RetornoErro(
      `Não foi possivel atualizar o Estudante ${error.message}`,
      res,
      400
    );
  }
}

module.exports = { EditarEstudante };
