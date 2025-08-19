import { prompt, RetornarMenu } from "../../dep/dep.js";
import { AddArrayBarralho, AddArrayFlashCards, baralhos, DBMASTER, DBMASTER2, flashcardsdb, salvarDados } from "../../dep/salvar.js";
import { ListarBaralho2 } from "./Listar.js";


export function DeletarBaralho(){
    if(baralhos.length < 1){
        console.log("Não HÁ BARALHOS!!")
        RetornarMenu()
        return
    } else {
        Deletar()
    }
}

function Deletar(){
    console.log("=== DELETAR BARALHO ===")
    ListarBaralho2()
    let INPbaralhoID = prompt("Escolha o baralho que deseja DELETAR: (ID) ")
    INPbaralhoID = parseInt(INPbaralhoID)
    const baralhoEncontrado = baralhos.filter((baralho) => baralho.ID !== INPbaralhoID);
    const flashcardsEncontrado = flashcardsdb.filter((flashcard) => flashcard.IDBaralho !== INPbaralhoID);
    let verificacao = prompt(`Deseja mesmo exluir o baralho de ID ${INPbaralhoID}? `)
    verificacao = verificacao.toLowerCase()
    if(verificacao == "s" || verificacao == "sim"){
        AddArrayFlashCards(flashcardsEncontrado)
        AddArrayBarralho(baralhoEncontrado)
    } else {
        console.log("OPERAÇÃO ABORTADA!!")
        RetornarMenu()
    }
    salvarDados(DBMASTER, baralhos, () =>{
        salvarDados(DBMASTER2, flashcardsdb, () =>{
            console.log("BARALHO REMOVIDO")
            RetornarMenu()
        })
    })
}