const {LerPacientes} = require("../../utils/utils.js");

function ListarPacientes(req, res){
    const Pacientes = LerPacientes()
    if(Pacientes == ''){
        return res.status(400).send("Não ha pacientes cadastrados")
    }
    res.status(200).send(Pacientes)
}

module.exports = {ListarPacientes}