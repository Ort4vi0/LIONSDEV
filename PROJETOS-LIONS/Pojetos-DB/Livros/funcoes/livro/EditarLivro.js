const Livro = require("../../Esquemas/SchemaLivro.js")
const { RetornoErro, Retorno } = require("../../utils/utils.js")

async function EditarLivro(req, res){
    try {
        const id = req.params.id
        const NovosDados = req.body

        const LivroAtualizado = await Livro.findByIdAndUpdate(
            id,
            NovosDados,
            {
                new: true,
                runValidators: true
            }
        )

        if(!LivroAtualizado){
            return RetornoErro("Livro nao encontrado", res, 400)
        }
        Retorno("Livro Atualziado com sucesso", res, 201)

    } catch (error) {
        console.error("Não foi possivel atualizar o livro.", error)
        return RetornoErro(`Não foi possivel atualizar o livro ${error.message}`, res, 400)
    }
}

module.exports = {EditarLivro}