const { LerProdutos, RetornarErro, SalvarProdutos, Retornar } = require("../utils/utils.js")

function EditarProduto(req, res){
    const {Nome, Categoria, Preco, Estoque} = req.body
    if(!Nome|| !Categoria|| !Preco || !Estoque){
        return RetornarErro("Obrigatorio conter Nome, Categoria, Preco, Estoque!!", res)
    }
    const id = Number(req.params.id)
    const Produtos = LerProdutos()
    const ProdutosIndex = Produtos.findIndex(produto => produto.ID === id)
    if(ProdutosIndex === -1){
        return RetornarErro("Não foi encontrado produto com o ID: " + id, res)
    }

    const NovoProduto = {
        ID: id,
        Nome: Nome,
        Categoria: Categoria,
        Preco: parseFloat(Preco),
        Estoque: parseInt(Estoque)
    }

    Produtos[ProdutosIndex] = NovoProduto
    SalvarProdutos(Produtos)
    Retornar("Produto Atualizado!!!", res)
}

module.exports = {EditarProduto}