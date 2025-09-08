const { LerMedicos, SalvarMedicos } = require("../../utils/utils.js")

function AdicionarMedico(req, res){
    const {nome, especialidade} = req.body
    if(!nome || !especialidade){
        return res.status(400).send("O Nome e a Especilade são obigatórios para o cadastro!!")
    }

    const Medico = {
        CRM: Date.now(),
        nome,
        especialidade
    }
    const Medicos = LerMedicos()
    Medicos.push(Medico)
    SalvarMedicos(Medicos)

    res.status(200).send("Dados salvos!!")
}

module.exports = {AdicionarMedico}
