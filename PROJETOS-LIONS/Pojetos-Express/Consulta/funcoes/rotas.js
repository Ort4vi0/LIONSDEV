const express = require('express')
const { AdicionarMedico } = require('./medico/AdicionarMedico.js')
const { RemoverMedicos } = require('./medico/RemoverMedicos.js')
const { EditarMedico } = require('./medico/EditarMedico.js')
const { AdicionarPaciente } = require('./pacientes/AdicionarPacientes.js')
const { RemoverPaciente } = require('./pacientes/RemoverPaciente.js')
const rotas = express.Router()

rotas.post('/Clinica/Adicionar/Medico', AdicionarMedico)
rotas.delete('/Clinica/Remover/Medico/:id', RemoverMedicos)
rotas.put('/Clinica/Medico/Editar/:id', EditarMedico)
rotas.post('/Clinica/Paciente/Adicionar', AdicionarPaciente)
rotas.delete('/Clinica/Paciente/Remover/:id', RemoverPaciente)

module.exports = rotas