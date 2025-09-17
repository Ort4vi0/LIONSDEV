const { LerProdutos, RetornarErro, SalvarProdutos, Retornar } = require("../utils/utils.js")

function RemoverProduto(req,res){
    const id = Number(req.params.id)
    const Produtos = LerProdutos()

    const ProdutosIndex = Produtos.findIndex(produto => produto.ID === id)
    if(ProdutosIndex === -1){
        return RetornarErro("Não foi encontrado nenhum produto com o id: " + id, res)
    }

    Produtos.splice(ProdutosIndex,1)
    SalvarProdutos(Produtos)
    Retornar("Produto Removido com sucesso!!", res)
}

module.exports = {RemoverProduto}