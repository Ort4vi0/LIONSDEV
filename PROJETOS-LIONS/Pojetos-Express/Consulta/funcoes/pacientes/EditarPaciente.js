const { LerPacientes, SalvarPacientes } = require("../../utils/utils.js")

function EditarPaciente(req,res){
    const id = Number(req.params.id)
    const Pacientes = LerPacientes();
    const PacienteIndex = Pacientes.findIndex((paciente) => paciente.ID === id)
    const {
        nome,
        data,
    } = req.body
    if(PacienteIndex === -1){
        return res.status(400).send("PACIENTE NAO ENCONTRADO")
    }
    if(!nome || !data){
        return res.status(400).send("NOME e/ou DATA não inseridos")
    }
    const NovoPaciente = {
        ID: id,
        nome,
        data,
    }
    Pacientes[PacienteIndex] = NovoPaciente
    SalvarPacientes(Pacientes)
    res.status(200).send("PACIENTE EDITADO!!")
}

module.exports = {EditarPaciente}