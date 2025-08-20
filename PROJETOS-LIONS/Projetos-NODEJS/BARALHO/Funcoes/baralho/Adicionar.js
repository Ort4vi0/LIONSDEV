import { LimparTela, RetornarMenu, prompt } from "../../dep/dep.js";
import { baralhos, DBMASTER, salvarDados } from "../../dep/salvar.js";


export function CriarBaralho(){
    LimparTela()
    console.log("=== CRIAÇÃO DE BARALHO ===")
    const INPnomebaralho = prompt("Digite o nome do baralho: ")
    const Baralhos = {
        ID: Date.now(),
        Nome: INPnomebaralho
    }
    baralhos.push(Baralhos)
    salvarDados(DBMASTER, baralhos, () => {
        console.log("Baralho Criado com SUCESSO...")
        RetornarMenu()
    })
}