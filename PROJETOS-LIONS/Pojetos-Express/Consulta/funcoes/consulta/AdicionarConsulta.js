const { LerConsultas, SalvarConsultas, VerificarMedicoePaciente} = require("../../utils/utils.js")

function AdicionarConsulta(req,res){
    const {Data, Medico, Paciente, Descricao} = req.body
    if(!Data || !Medico || !Paciente || !Descricao){
        return res.status(400).send("INSIRA O QUE PEDE... SIMPLES NÉ...")
    }

    VerificarMedicoePaciente(Medico, Paciente, res)

    const Consulta = {
        ID: Date.now(),
        Data,
        Medico,
        Paciente,
        Descricao
    }

    const Consultas = LerConsultas()
    Consultas.push(Consulta)
    SalvarConsultas(Consultas)

    res.status(200).send("Consulta marcada!! <3")
}

module.exports = {AdicionarConsulta}