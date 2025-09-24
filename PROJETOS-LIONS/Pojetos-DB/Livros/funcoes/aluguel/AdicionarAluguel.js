const Livro = require("../../Esquemas/SchemaLivro.js");
const Aluguel = require("../../Esquemas/SchemaAluguel.js");
const Estudante = require("../../Esquemas/SchemaEstudante.js");

const { RetornoErro, Retorno } = require("../../utils/utils.js")


async function AdicionarAluguel(req, res) {
  const { LivroID, EstudanteID, DiasParaDevolver } = req.body;
  if (!LivroID || !EstudanteID || DiasParaDevolver === undefined) {
    return RetornoErro("Necessario conter LivroID, EstudanteID, DiasParaDevolver", res);
  }

  try {
    const FindLivro = await Livro.findById(LivroID);
    if (!FindLivro) {
      return RetornoErro("Livro nao encontrado no sistema", res, 400);
    }
    const FindEstudante = await Estudante.findById(EstudanteID);
    if (!FindEstudante) {
      return RetornoErro("Estudante não cadastrado no sistema", res, 404);
    }
    const DataAtual = new Date();
    const DataDevolucao = new Date(DataAtual);
    DataDevolucao.setDate(DataAtual.getDate() + parseInt(DiasParaDevolver));

    const novoAluguel = new Aluguel({
      Livro: LivroID,
      Estudante: EstudanteID,
      DataAluguel: DataAtual.toISOString(),
      DataDevolucao: DataDevolucao.toISOString(),
    });

    const aluguelSalvo = await novoAluguel.save();

    Retorno("Livro Alugado com sucesso", res, 201, aluguelSalvo);
  } catch (error) {
    console.error("Erro ao processar aluguel:", error);
    RetornoErro(`Erro ao processar aluguel: ${error.message}`, res, 500);
  }
}

module.exports = { AdicionarAluguel };
