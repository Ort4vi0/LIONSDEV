const Produto = require("../../Schemas/SchemaProduct");
const { RetornoErro, Retorno } = require("../../utils/utils");

async function AddProductAmount(req, res) {
  const id = req.params.id;
  const Dados = req.body;
  try {
    const ProdutoX = await Produto.findById(id);
    if (!ProdutoX) {
      return RetornoErro("Produto não encontrado", res);
    }

    ProdutoX.Quantidade += Dados.Quantidade;
    await ProdutoX.save();

    res.status(200).json({
        mensagem: "Quantidade Atualizada",
        QuantidadeAtual:  ProdutoX.Quantidade
    })
  } catch (error) {
    console.error("Erro interno", error);
    RetornoErro("Erro interno no servidor", res);
  }
}

module.exports = { AddProductAmount };
