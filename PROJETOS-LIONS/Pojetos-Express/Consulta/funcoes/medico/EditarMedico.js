const { SalvarMedicos, LerMedicos } = require("../../utils/utils.js")

function EditarMedico(req,res){
    const id = Number(req.params.id)
    const Medicos = LerMedicos()
    const MedicoIndice = Medicos.findIndex((medico) => medico.CRM === id)
    const {
        nome,
        especialidade,
    } = req.body
    if(!nome || !especialidade){
        return res.status(400).send("IDIOTA!!!!!! POE OS TROSSSSOOOOOOO")
    }
    const NovoMedico = {
        CRM: MedicoIndice.CRM,
        nome,
        especialidade,
    }
    Medicos[MedicoIndice] = NovoMedico
    SalvarMedicos(Medicos)
    res.status(200).send("Médico Atualizadinho <3")
}

module.exports = {EditarMedico}