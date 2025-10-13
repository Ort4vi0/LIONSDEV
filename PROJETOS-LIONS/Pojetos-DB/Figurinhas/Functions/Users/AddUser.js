const UsersMGS = require("../../others/Schemas/SchemaUser")
const { RetornarSucesso } = require("../../others/utils/utils")

async function AddUser(req,res){
    const Dados = req.body
    if(Dados.QNTF == null){
        Dados.QNTF = 0
    }
    const NewUser = await UsersMGS.create(Dados)
    RetornarSucesso(res, `Usuário ${Dados.Nome} Adicionado com sucesso`,200, NewUser)
}

module.exports = {AddUser}