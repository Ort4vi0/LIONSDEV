const Produto = require("../../Esquemas/SchemaProduto");
const { RetornoErro, Retorno } = require("../../utils/utils");

async function EditarProduto(req, res) {
  try {
    const id = req.params.id;
    const DadosNovos = req.body;

    const ProdutoEditado = await Produto.findByIdAndUpdate(id, DadosNovos, {
      new: true,
      runValidators: true,
    });

    if (!ProdutoEditado) {
      RetornoErro("Não foi possivel editar esse produto",res);
    }

    Retorno("Produto Editado com sucesso",res,200,ProdutoEditado)
  } catch (error) {
    console.error("Erro interno", error)
    RetornoErro("Erro interno no servidor",res)
  }
}

module.exports = {EditarProduto}
