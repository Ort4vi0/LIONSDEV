const Estudante = require("../../Esquemas/SchemaEstudante.js");
const { RetornoErro, RetornoArray } = require("../../utils/utils.js");

async function ListarEstudante(req, res) {
  try {
    const Estudantes = await Estudante.find();
    if(Estudantes != ''){
      return RetornoArray(Estudantes, res, 201)
    }
    RetornoErro("Não há estudantes cadastrados", res, 400)
  } catch (error) {
        console.error("Não foi possivel listar os Estudantes", error)
        console.error(`${error.message}`)
        RetornoErro("Ocorreu um erro interno" + `${error.message}`, res, 400)
  }
}
module.exports = { ListarEstudante };
