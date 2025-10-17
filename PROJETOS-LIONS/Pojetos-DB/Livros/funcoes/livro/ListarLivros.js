const { RetornoErro, RetornoArray } = require("../../utils/utils.js");
const Livro = require("../../Esquemas/SchemaLivro.js");

async function ListarLivros(req, res) {
  try {
    const Livros = await Livro.find();
    if (Livros != "") {
      RetornoArray(Livros, res, 201);
    }
    RetornoErro("Não há Livros cadastrados", res, 500);
  } catch (error) {
    console.error("Não foi possivel listar os livros");
    console.error(`${error.message}`);
    RetornoErro("Ocorreu um erro interno", res);
  }
}

module.exports = { ListarLivros };
