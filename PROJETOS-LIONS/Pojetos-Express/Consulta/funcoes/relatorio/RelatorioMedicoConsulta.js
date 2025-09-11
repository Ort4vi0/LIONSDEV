const { LerConsultas, LerMedicos } = require("../../utils/utils.js")

function RelatorioMedicoConsulta(req, res){
    const id = Number(req.params.id)
    const Consultas = LerConsultas()
    const Medicos = LerMedicos()
    const FiltroMedico = Medicos.findIndex((Medico) => Medico.CRM === id)
    if (FiltroMedico === -1){
        return res.status(400).send("Não possui cadastro de nenhum médico com CRM: "+ id)
    }
    const FiltroConsulta = Consultas.filter(Consulta => Consulta.Medico === id)
    if(FiltroConsulta == ''){
        return res.status(400).send("O médico ainda não realizou nenhum atendimento")
    }
    const resposta = {
        CRM: id,
        atendimentos: FiltroConsulta
    }
   res.status(200).json(resposta);
}

module.exports = {RelatorioMedicoConsulta}