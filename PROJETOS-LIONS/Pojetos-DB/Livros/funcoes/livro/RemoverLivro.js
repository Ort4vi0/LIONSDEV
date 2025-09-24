const { LerLivro, SalvarLivro, RetornoErro, Retorno } = require("../../utils/utils.js")

function RemoverLivro(req,res){
    const id = Number(req.params.id)
    const Livros = LerLivro()
    const IndexLivro = Livros.findIndex(livro => livro.ID === id)
    
    if(IndexLivro === -1){
        RetornoErro("Livro não encontrado no sistema!!", res)
    }

    Livros.splice(IndexLivro, 1)
    SalvarLivro(Livros)
    Retorno("Livro Removido!!!", res)
}

module.exports = {RemoverLivro}