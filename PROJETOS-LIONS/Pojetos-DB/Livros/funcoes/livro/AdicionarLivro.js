const Livro = require("../../Esquemas/SchemaLivro.js");
const { RetornoErro, Retorno } = require("../../utils/utils.js");

async function AdicionarLivro(req, res) {
  const { Titulo, Autor, Ano, Genero } = req.body;
  if (!Titulo || !Autor || !Ano || !Genero) {
    return RetornoErro("Necessário conter Titulo, Autor, Ano e Genero", res);
  }

  const LivroNovo = new Livro({
    Titulo: Titulo,
    Autor: Autor,
    Ano: Ano,
    Genero: Genero,
  });

  try {
    const livroSalvo = await LivroNovo.save();
    Retorno("Livro adicionado!", res, 201, livroSalvo);
  } catch (error) {
    console.error("Erro ao salvar o livro", error);
    RetornoErro(
      `Erro ao salvar o livro no banco de dados: ${error.message}`,
      res,
      500
    );
  }
}

module.exports = { AdicionarLivro };
