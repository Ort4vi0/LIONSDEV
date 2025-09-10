const { LerConsultas } = require("../../utils/utils.js");

function RelatorioPaciente(req, res) {
    const id = Number(req.params.id);
    const Consultas = LerConsultas();
    const Filtro = Consultas.filter(Consulta => Consulta.Paciente === id);

    if (Filtro.length > 0) {
        const medicos = Filtro.map(Consulta => Consulta.Medico);
        res.status(200).json({ medicos }); 
    } else {
        res.status(404).send('Paciente Não Encontrado');
    }
}

module.exports = { RelatorioPaciente };