const { LerMedicos, SalvarMedicos } = require("../../utils/utils.js")

function RemoverMedicos(req, res){
    const id = Number(req.params.id)
    const Medicos = LerMedicos()
    const MedicoIndex = Medicos.findIndex((Medico) => Medico.CRM === id)
    if(MedicoIndex === -1){
        return res.status(400).send("Você inseriu um ID inválido")
    }

    Medicos.splice(MedicoIndex, 1)
    SalvarMedicos(Medicos)
    res.status(200).send("Medico Deletado!!")
}

module.exports = {RemoverMedicos}