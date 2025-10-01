const Produto = require("../../Schemas/SchemaProduct");
const { RetornoErro } = require("../../utils/utils");

async function RemProductAmount(req, res) {
  const id = req.params.id;
  const Dados = req.body;
  try {
    const ProdutoX = await Produto.findById(id);
    if (!ProdutoX) {
      return RetornoErro("Produto não encontrado", res);
    }

    ProdutoX.Quantidade -= Dados.Quantidade;
    if(ProdutoX.Quantidade >= 0){
        await ProdutoX.save();
    } else {
        return RetornoErro(`Não foi possivel tirar ${Dados.Quantidade} produtos pois o estoque ficaria negativo`, res)
    }

    res.status(200).json({
        mensagem: "Quantidade Atualizada",
        QuantidadeAtual:  ProdutoX.Quantidade
    })
  } catch (error) {
    console.error("Erro interno", error);
    RetornoErro("Erro interno no servidor", res);
  }
}

module.exports = { RemProductAmount };
