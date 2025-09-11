const { LerLivro, SalvarLivro, RetornoErro, Retorno } = require("../../utils/utils.js");

function AdicionarLivro(req, res){
    const {Titulo, Autor, Ano, Genero} = req.body
    const Livros = LerLivro()
    if(!Titulo || !Autor || !Ano || !Genero ){
        RetornoErro("Necessário conter Titulo, Autor, Ano e Genero", res)
    }

    const Livro = {
        ID: Date.now(),
        Titulo: Titulo,
        Autor: Autor,
        Ano: Ano,
        Genero: Genero
    }

    Livros.push(Livro)
    SalvarLivro(Livros)
    Retorno("Livro Adicionado!!!", res)
}

module.exports = {AdicionarLivro}