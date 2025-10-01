const Produto = require("../../Esquemas/SchemaProduto");
const { Retorno, RetornoErro, RetornoArray } = require("../../utils/utils");

async function AdicionarProduto(req, res) {
  const Dados = req.body;

  try {
    const ProdutoNovo = new Produto(Dados);
    const SalvarProduto = await ProdutoNovo.save();

    Retorno("Produto Salvo com sucesso", res, 200, SalvarProduto);
  } catch (error) {
    if (error.name === "ValidationError") {
      const mensagensErro = Object.values(error.errors).map(
        (err) => err.message
      );
      console.error("Erro de validação:", mensagensErro);
      return res.status(400).json({
        mensagem: "Dados inválidos. Verifique os campos obrigatórios.",
        erros: mensagensErro,
      });
    }

    if(error.cause && error.cause.code === 11000){
      const campoDuplicado = Object.keys(error.cause.keyValue)[0];
      const valorDuplicado = Object.values(error.cause.keyValue)[0];
      const mensagem = `O ${campoDuplicado} '${valorDuplicado}' já está cadastrado.`;
      
      return RetornoArray({erro: mensagem}, res, 400)
    }

    console.error("Erro interno", error);
    RetornoErro("Ocoreu um erro interno na aplicacao", res);
  }
}

module.exports = { AdicionarProduto };
