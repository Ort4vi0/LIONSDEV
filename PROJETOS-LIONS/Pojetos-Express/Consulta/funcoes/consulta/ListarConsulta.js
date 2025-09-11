const { LerConsultas } = require("../../utils/utils.js");

function ListarConsultas(req, res){
    const Consultas = LerConsultas()
    if(Consultas == ''){
        return res.status(400).send("Não há consultas para listagem")
    }
    res.status(200).send(Consultas)
}

module.exports = {ListarConsultas}