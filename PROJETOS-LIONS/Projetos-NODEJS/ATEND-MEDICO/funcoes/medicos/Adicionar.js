import { cor, LimparTela, log, prompt, RetornarMenu } from "../../dep/dep.js";
import { DBMASTER2, medicos, salvarDados } from "../../dep/salvar.js";

function AdicionarMedico(){
    LimparTela()
    log(cor.red("====== ADICIONAR MÉDICO ======"))
    const INPNome = prompt("Digite o Nome do Médico: ")
    const INPEspecialidade = prompt("Digite a Especialidade do memso: ")
    const Medico = {
        ID: Date.now(),
        Nome: INPNome,
        Especialidade: INPEspecialidade
    }
    medicos.push(Medico)
    salvarDados(DBMASTER2, medicos, () =>{
        log(cor.green("SALVO COM SUCESSO"))
        RetornarMenu()
    })
}

export {
    AdicionarMedico,
}