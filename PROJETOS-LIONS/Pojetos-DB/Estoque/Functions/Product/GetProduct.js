const Produto = require("../../Schemas/SchemaProduct.js");
const { RetornoErro, RetornoArray } = require("../../utils/utils.js");

async function GetProduct(req, res) {
  try {
    const Produtos = await Produto.find();
    if (!Produtos) {
      return RetornoErro("Não há produtos cadastrados!!", res);
    }
    RetornoArray(Produtos, res, 200);
  } catch (error) {
    console.error("Ocorreu um erro interno", error);
    RetornoErro("Erro interno!", res);
  }
}

module.exports = { GetProduct };
