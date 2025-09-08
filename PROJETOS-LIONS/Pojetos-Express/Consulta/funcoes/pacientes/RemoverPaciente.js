const { LerPacientes, SalvarPacientes } = require("../../utils/utils.js")

function RemoverPaciente(req,res){
    const id = Number(req.params.id)
    const Pacientes = LerPacientes()
    const PacienteIndex = Pacientes.findIndex((paciente) => paciente.ID === id)
    if(PacienteIndex == -1){
        return res.status(400).send(`Paciente ${id} não encontrado`)
    }
    Pacientes.splice(PacienteIndex,1)
    SalvarPacientes(Pacientes)
    res.status(200).send("Paciente Removido!!!")
}

module.exports = {RemoverPaciente}