const express = require('express')

const { AdicionarMedico } = require('./medico/AdicionarMedico.js')
const { RemoverMedicos } = require('./medico/RemoverMedico.js')
const { EditarMedico } = require('./medico/EditarMedico.js')
const { ListarMedicos } = require('./medico/ListarMedico.js')

const { AdicionarPaciente } = require('./pacientes/AdicionarPaciente.js')
const { RemoverPaciente } = require('./pacientes/RemoverPaciente.js')
const { EditarPaciente } = require('./pacientes/EditarPaciente.js')
const { ListarPacientes } = require('./pacientes/ListarPacientes.js')

const { AdicionarConsulta } = require('./consulta/AdicionarConsulta.js')
const { RemoverConsulta } = require('./consulta/RemoverConstulta.js')
const { EditarConsulta } = require('./consulta/EditarConsulta.js')
const { ListarConsultas } = require('./consulta/ListarConsulta.js')

const { RelatorioMedicoConsulta } = require('./relatorio/RelatorioMedicoConsulta.js')
const { RelatorioPaciente } = require('./relatorio/RelatorioPaciente.js')
const { RelatorioMedicoPaciente } = require('./relatorio/RelatorioMedicoPaciente.js')
const { RelatorioConsultaMes } = require('./relatorio/RelatorioConsutaMes.js')


const rotas = express.Router()

rotas.post('/Clinica/Medico/Adicionar', AdicionarMedico)
rotas.delete('/Clinica/Medico/Remover/:id', RemoverMedicos)
rotas.put('/Clinica/Medico/Editar/:id', EditarMedico)
rotas.get('/Clinica/Medico/Listar', ListarMedicos)

rotas.post('/Clinica/Paciente/Adicionar', AdicionarPaciente)
rotas.delete('/Clinica/Paciente/Remover/:id', RemoverPaciente)
rotas.put('/Clinica/Paciente/Editar/:id', EditarPaciente)
rotas.get('/Clinica/Paciente/Listar', ListarPacientes)


rotas.post('/Clinica/Consulta/Adicionar', AdicionarConsulta)
rotas.delete('/Clinica/Consulta/Remover/:id', RemoverConsulta)
rotas.put('/Clinica/Consulta/Editar/:id', EditarConsulta)
rotas.get('/Clinica/Consulta/Listar', ListarConsultas)

rotas.get('/Clinica/Relatorio/Medico/Paciente/:id', RelatorioPaciente)
rotas.get('/Clinica/Relatorio/Consultas/Medico/:id', RelatorioMedicoConsulta)
rotas.get('/Clinica/Relatorio/Paciente/Medico/:id', RelatorioMedicoPaciente)
rotas.get('/Clinica/Relatorio/Consulta/mes/:data', RelatorioConsultaMes)

module.exports = rotas 