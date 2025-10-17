const Livro = require("../../Esquemas/SchemaLivro.js");
const { RetornoErro, Retorno } = require("../../utils/utils.js");

async function RemoverLivro(req, res) {
  try {
    const id = req.params.id;
    const Livros = Livro.find();

    const LivroDeletado = await Livros.findByIdAndDelete(id);
    if (!LivroDeletado) {
      return RetornoErro("Livro nao encontrado", res, 500);
    }
    Retorno("Livro Removido!!!", res, 200, LivroDeletado);
  } catch (error) {
    console.error("Livro nao removido!!");
    RetornoErro(
      `Não foi possivel Remover o livro!! ${error.message}`,
      res,
      400
    );
  }
}

module.exports = { RemoverLivro };
