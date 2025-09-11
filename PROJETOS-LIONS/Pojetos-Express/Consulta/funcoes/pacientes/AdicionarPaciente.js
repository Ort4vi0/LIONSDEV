const { LerPacientes, SalvarPacientes } = require("../../utils/utils.js")

function AdicionarPaciente(req,res){
    const {Nome, Data} = req.body
    if(!Nome || !Data){
        return res.status(400).send("Insira o nome e data de nascimento...")
    }
    
    const Paciente = { 
        ID: Date.now(),
        Nome,
        DataDeNascimento: Data
    }

    const Pacientes = LerPacientes()
    Pacientes.push(Paciente)
    SalvarPacientes(Pacientes)

    res.status(200).send("Paciente Adicionado!!")
}

module.exports = {AdicionarPaciente}