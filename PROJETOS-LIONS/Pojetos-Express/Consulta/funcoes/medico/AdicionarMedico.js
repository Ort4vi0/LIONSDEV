const { LerMedicos, SalvarMedicos } = require("../../utils/utils.js")

function AdicionarMedico(req, res){
    const {Nome, Especialidade} = req.body
    if(!Nome || !Especialidade){
        return res.status(400).send("O Nome e a Especilade são obigatórios para o cadastro!!")
    }

    const Medico = {
        CRM: Date.now(),
        Nome,
        Especialidade
    }
    const Medicos = LerMedicos()
    Medicos.push(Medico)
    SalvarMedicos(Medicos)

    res.status(200).send("Dados salvos!!")
}

module.exports = {AdicionarMedico}
