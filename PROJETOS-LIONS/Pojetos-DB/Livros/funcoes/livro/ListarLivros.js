const { RetornoErro, Retorno } = require("../../utils/utils.js");
const Livro = require("../../Esquemas/SchemaLivro.js");

async function ListarLivros(req, res){
    try {
        const Livros = await Livro.find();
        res.status(200).json(Livros)
    } catch (error) {
        console.error("Não foi possivel listar os livros")
        console.error(`${error.message}`)
        RetornoErro("Ocorreu um erro interno", 400)
    }
}

module.exports = {ListarLivros};