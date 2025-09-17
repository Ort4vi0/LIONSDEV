const { LerProdutos, RetornarErro, Retornar } = require("../utils/utils.js");

function ListarProdutos(req, res){
    const Produtos = LerProdutos()

    if(Produtos.length === 0){
        return RetornarErro("Não há produtos Cadastrados", res)
    }

    const {Nome, Preco, Categoria, Estoque} = req.query

    let ProdutosFiltrados = [...Produtos]

    if(Nome){
        ProdutosFiltrados = ProdutosFiltrados.filter(produto => produto.Nome === Nome)
    }

    if(Preco){
        ProdutosFiltrados = ProdutosFiltrados.filter(produto => produto.Preco === Preco)
    }

    if(Categoria){
        ProdutosFiltrados = ProdutosFiltrados.filter(produto => produto.Categoria === Categoria)
    }

    if(Estoque){
        ProdutosFiltrados = ProdutosFiltrados.filter(produto => produto.Estoque === Estoque)
    }

    if(ProdutosFiltrados.length === 0){
        return RetornarErro("Nenhum Produto Encontrado com esses filtros", res)
    }

    const ListaProdutos = {
        ProdutosEncontrados: ProdutosFiltrados.length,
        Produtos: ProdutosFiltrados
    }

    return Retornar(ListaProdutos, res)
}

module.exports = {ListarProdutos}