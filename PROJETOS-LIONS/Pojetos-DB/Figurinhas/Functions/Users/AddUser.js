const UsersMGS = require("../../others/Schemas/SchemaUser")

async function AddUser(req,res){
    const Dados = req.body
    const NewUser = UsersMGS.create(Dados)
    
}