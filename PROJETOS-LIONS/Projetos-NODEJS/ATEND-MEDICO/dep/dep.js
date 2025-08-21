import PromptSync from "prompt-sync";
import chalk from 'chalk';
import { consultas, medicos, pacientes } from "./salvar.js";
import { MenuPrincipal } from "../Atendimento.js";
const prompt = PromptSync({ sigint: true });
const cor = chalk;
const log = console.log;

function LimparTela() {
    console.clear();
}

function VerificarQNTConsultas() {
    if(consultas.length < 1){
        log(cor.red("Não há consultas"))
    }
}

function VerificarQNTMedicos() {
    if(medicos.length < 1){
        log(cor.red("Não há medicos"))
    }
}

function VerificarQNTPacientes() {
    if(pacientes.length < 1){
        log(cor.red("Não há pacientes"))
    }
}

function RetornarMenu(){
    prompt("Pressione ENTER para VOLTAR....")
    MenuPrincipal()
}

export {
    prompt,
    cor,
    log,
    LimparTela,
    VerificarQNTConsultas,
    VerificarQNTMedicos,
    VerificarQNTPacientes,
    RetornarMenu
};