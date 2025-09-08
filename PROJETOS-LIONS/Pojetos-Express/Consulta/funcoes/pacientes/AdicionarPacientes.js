const { LerPacientes, SalvarPacientes } = require("../../utils/utils.js")

function AdicionarPaciente(req,res){
    const {nome, data} = req.body
    if(!nome || !data){
        return res.status(400).send("Insira o nome e data de nascimento...")
    }
    const Paciente = { 
        ID: Date.now(),
        nome,
        data
    }

    const Pacientes = LerPacientes()
    Pacientes.push(Paciente)
    SalvarPacientes(Pacientes)

    res.status(200).send("Paciente Adicionado!!")
}

module.exports = {AdicionarPaciente}