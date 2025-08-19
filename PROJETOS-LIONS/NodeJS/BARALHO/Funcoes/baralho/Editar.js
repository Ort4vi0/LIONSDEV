import { LimparTela, prompt, RetornarMenu } from "../../dep/dep.js";
import { baralhos } from "../../dep/salvar.js";


export function EditarBaralho(){
    LimparTela()
    console.log("=== EDITOR BARALHOS ===")
    if(baralhos.length < 1){
        console.log("Não HÁ baralhos cadastrados!")
        RetornarMenu()
    } else {
        Editor()
    }
}

function Editor(){
    prompt("Selecione o baralho desejado: ")
}