const { LerConsultas, SalvarConsultas, VerificarMedicoePaciente } = require("../../utils/utils.js")

function EditarConsulta(req,res){
    const id = Number(req.params.id)
    const Consultas = LerConsultas()
    const ConsultaIndex = Consultas.findIndex((consulta) => consulta.ID === id)
    const {
        Data,
        Medico,
        Paciente,
        Descricao
    } = req.body
    if(ConsultaIndex === -1){
        return res.status(400).send(`Consulta: ${id} não encontrada`)
    }

    VerificarMedicoePaciente(Medico, Paciente)

    const NovaConsulta = {
        ID: id,
        Data,
        Medico,
        Paciente,
        Descricao
    }
    
    Consultas[ConsultaIndex] = NovaConsulta
    SalvarConsultas(Consultas)
    res.status(200).send("Consulta Atualizada com sucesso!!")
}

module.exports = {EditarConsulta}