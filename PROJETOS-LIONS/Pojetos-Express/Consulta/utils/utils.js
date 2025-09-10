const fs = require('fs');

function SalvarDados(PATH, dados) {
    try {
        const dadosJson = JSON.stringify(dados, null, 2);
        fs.writeFileSync(PATH, dadosJson);
    } catch (error) {
        console.error('Erro ao salvar os dados:', error);
    }
}

function LerDados(PATH) {
    if (!fs.existsSync(PATH)) {
        console.log('Arquivo de dados não encontrado. Criando um novo...');
        return [];
    }
    try {
        const dadosJson = fs.readFileSync(PATH, 'utf-8');
        return JSON.parse(dadosJson);
    } catch (error) {
        console.error('Erro ao ler ou analisar o arquivo JSON:', error);
        return [];
    }
}

const DBconsultas = "./db/consultas.json"
const DBmedicos = "./db/medicos.json" 
const DBpacientes = "./db/pacientes.json"

function SalvarMedicos(dados){
    SalvarDados(DBmedicos, dados)
}
function SalvarPacientes(dados){
    SalvarDados(DBpacientes, dados)
}

function SalvarConsultas(dados){
    SalvarDados(DBconsultas, dados)
}

function LerConsultas(){
    return LerDados(DBconsultas)
}

function LerMedicos(){
    return LerDados(DBmedicos)
}
function LerPacientes(){
    return LerDados(DBpacientes)
}

function VerificarMedicoePaciente(Medico, Paciente, res){
    const Medicos = LerMedicos()
    const Pacientes = LerPacientes()
    const VerificarMedico = Medicos.filter(medico => medico.CRM === Medico)
    const VerificarPaciente = Pacientes.filter(paciente => paciente.ID === Paciente)

    if(VerificarMedico == ''){
        return res.status(400).send("Não foi possível marcar a consulta CRM inválido")
    }
    if(VerificarPaciente == ''){
        return res.status(400).send("Não foi possível marcar a consuta paciente com ID inválido")
    }
}

module.exports = {
    SalvarDados,
    LerDados,
    SalvarMedicos,
    SalvarPacientes,
    SalvarConsultas,
    LerConsultas,
    LerMedicos,
    LerPacientes,
    VerificarMedicoePaciente
};