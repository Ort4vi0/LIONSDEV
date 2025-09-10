const { LerConsultas, SalvarConsultas } = require("../../utils/utils.js")

function RemoverConsulta(req,res){
    const id = Number(req.params.id)
    const Consultas = LerConsultas()
    const ConsultaIndex = Consultas.findIndex((consulta) => consulta.ID === id)
    if(ConsultaIndex === -1){
        return res.status(400).send(`Consulta de ID ${id} não encontrada!!`)
    }

    Consultas.splice(ConsultaIndex, 1)
    SalvarConsultas(Consultas)
    res.status(200).send("CONSULTA REMOVIDA!!")
}

module.exports = {RemoverConsulta}