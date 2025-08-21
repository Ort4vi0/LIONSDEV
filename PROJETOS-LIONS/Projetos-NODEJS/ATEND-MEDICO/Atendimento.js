import { cor, LimparTela, log, prompt } from "./dep/dep.js"
import { AddArrayConsultas, AddArrayMedicos, AddArrayPacientes, carregarDados, DBMASTER1, DBMASTER2, DBMASTER3 } from "./dep/salvar.js"
import { AdicionarMedico } from "./funcoes/medicos/Adicionar.js"

function MenuPrincipal(){
    LimparTela()
    log(cor.blackBright("========== MENU =========="))
    log(cor.red("1 - Médico" + cor.green("\n2 - Pacientes")))
    const escolha = prompt("Escolha uma opção: ")
    switch(escolha){
        case '1':
            MenuMedico()
            break;
        case '2':
            MenuPaciente()
            break;
    }
}

function MenuMedico(){
    LimparTela()
    log(cor.red("========== MENU MÉDICO =========="))
    log(cor.red("1 - Adicionar Médico\n2 - Remover Médico"))
    const escolha = prompt("Escolha uma opção: ")
    switch(escolha){
        case '1':
            AdicionarMedico()
            break;
        case '2':
            MenuPaciente()
            break;
    }
}

function MenuPaciente(){

}

export function Iniciar() {
    console.log("Iniciando o sistema..."); // SAIDA
    carregarDados(DBMASTER1, (consultasdata) => {
      AddArrayConsultas(consultasdata)
      carregarDados(DBMASTER2, (medicosdata) => {
        AddArrayMedicos(medicosdata)
        carregarDados(DBMASTER3, (pacientesdata) => {
            AddArrayPacientes(pacientesdata)
            MenuPrincipal()
        })
      });
    });
  }

Iniciar()

export {
    MenuPrincipal
}