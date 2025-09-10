const {LerMedicos } = require("../../utils/utils.js");

function ListarMedicos(req, res){
    const Medicos = LerMedicos()
    if(Medicos == ''){
        return res.status(400).send("Não há medicos cadastrados")
    }
    res.status(200).send(Medicos)
}

module.exports = {ListarMedicos}