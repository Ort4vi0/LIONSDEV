import { LimparTela, RetornarMenu } from "../../dep/dep.js";
import { baralhos } from "../../dep/salvar.js";

export function ListarBaralho(){
    LimparTela()
    console.log(`=== BARALHOS ATUAIS: ${baralhos.length}`)
    if(baralhos.length < 1){
        console.log("Não há BARALHOS para serem listados!!")
        RetornarMenu()
    } else {
        Listar()
    }
}

function Listar(){
    baralhos.forEach((baralho) => {
        console.log(`ID: ${baralho.ID} || Nome: ${baralho.Nome}`)
    })
    RetornarMenu()
}

export function ListarBaralho2(){
    baralhos.forEach((baralho) => {
        console.log(`ID: ${baralho.ID} || Nome: ${baralho.Nome}`)
    })
}