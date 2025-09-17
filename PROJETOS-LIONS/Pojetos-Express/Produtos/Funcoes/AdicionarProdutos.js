const { RetornarErro, LerProdutos, SalvarProdutos, Retornar } = require("../utils/utils.js")

function AdicionarProdutos(req, res){
    const {Nome, Categoria, Preco, Estoque} = req.body
    if(!Nome|| !Categoria|| !Preco || !Estoque){
        return RetornarErro("Obrigatorio conter Nome, Categoria, Preco, Estoque!!", res)
    }

    const Produtos = LerProdutos()

    const Produto = {
        ID: Date.now(),
        Nome: Nome,
        Categoria: Categoria,
        Preco: parseFloat(Preco),
        Estoque: parseInt(Estoque)
    }

    Produtos.push(Produto)
    SalvarProdutos(Produtos)
    Retornar("Produto Adicionado", res)
}

module.exports = {AdicionarProdutos}