const { LerConsultas } = require("../../utils/utils.js")

function RelatorioConsultaMes(req,res){
    const data = Number(req.params.data)
    const Consultas = LerConsultas()
    const Filtro = Consultas.filter(consulta => consulta.Data.mes === data)
    if(Filtro == ''){
        return res.status(400).send("Não há consultas no mes: " + data)
    }
    res.status(200).send(Filtro)
}

module.exports = {RelatorioConsultaMes}