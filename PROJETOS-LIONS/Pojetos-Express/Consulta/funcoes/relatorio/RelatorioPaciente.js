const { LerConsultas } = require("../../utils/utils.js");

function RelatorioPaciente(req, res) {
    const id = Number(req.params.id);
    const Consultas = LerConsultas();
    const Filtro = Consultas.filter(Consulta => Consulta.Paciente === id);

    if (Filtro.length > 0) {
        const atendimentosPorMedico = {};
        Filtro.forEach(consulta => {
            const idMedico = consulta.Medico;
            if (atendimentosPorMedico[idMedico]) {
                atendimentosPorMedico[idMedico]++;
            } else {
                atendimentosPorMedico[idMedico] = 1;
            }
        });
        const Atedimento = {
            Paciente: id,
            Medicos: atendimentosPorMedico
        }
        res.status(200).json(Atedimento); 
    } else {
        res.status(404).send('Paciente Não Encontrado');
    }
}

module.exports = { RelatorioPaciente };