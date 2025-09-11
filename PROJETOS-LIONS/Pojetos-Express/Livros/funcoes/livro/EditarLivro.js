const { RetornoErro, LerLivro, SalvarLivro, Retorno } = require("../../utils/utils.js")

function EditarLivro(req, res){
    const id = Number(req.params.id)
    const {Titulo, Autor, Ano, Genero} = req.body
    if(!Titulo || !Autor || !Ano || !Genero){
        RetornoErro("Os campos Titulo, Autor, Ano, Genero são obrigatorios", res)
    }
    const Livros = LerLivro()
    const LivrosIndex = Livros.findIndex(livro => livro.ID === id)
    if(LivrosIndex === -1){
        RetornoErro("Não há nenhum livro com o ID " + id + " Cadastrado!!!", res)
    }

    const NovoLivro = {
        ID: id,
        Titulo: Titulo,
        Autor: Autor,
        Ano: Ano,
        Genero: Genero
    }

    Livros[LivrosIndex] = NovoLivro
    SalvarLivro(Livros)
    Retorno("Livro editado!!", res)
}

module.exports = {EditarLivro}