const { LerConsultas } = require("../../utils/utils.js")

function RelatorioMedicoPaciente(req, res){
    const id = Number(req.params.id)
    const Consultas = LerConsultas()
    const Filtro = Consultas.filter(Consulta => Consulta.Medico === id)

        if (Filtro.length > 0) {
        const MedicoPaciente = {};
        Filtro.forEach(consulta => {
            const idPaciente = consulta.Paciente;
            if (MedicoPaciente[idPaciente]) {
                MedicoPaciente[idPaciente]++;
            } else {
                MedicoPaciente[idPaciente] = 1;
            }
        });
        const Atedimento = {
            Medico: id,
            Pacientes: MedicoPaciente
        }
        res.status(200).json(Atedimento); 
    } else {
        res.status(404).send('Paciente Não Encontrado');
    }
}

module.exports = {RelatorioMedicoPaciente}