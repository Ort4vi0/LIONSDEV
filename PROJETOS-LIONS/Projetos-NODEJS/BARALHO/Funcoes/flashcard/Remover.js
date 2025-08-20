import { prompt, RetornarMenu, VerificarQNTflashcard } from "../../dep/dep.js"
import { AddArrayFlashCards, DBMASTER2, flashcardsdb, salvarDados } from "../../dep/salvar.js"
import { ListarFlashCards2 } from "./Listar.js"

export function DeletarFlashCard(){
    console.log("==== DELETAR REMOVER ====")
    VerificarQNTflashcard()
    Deletar()
}

function Deletar(){
    ListarFlashCards2()
    const INPID = prompt("Escolha o FlashCard para REMOVER(ID): ")
    const Filtro = flashcardsdb.filter((flashcard => flashcard.ID !== parseInt(INPID)))

    const Verificar = prompt(`Deseja mesmo DELETAR o FLASHCARD ${INPID}?(s/n): `)
    if(Verificar.toLowerCase() == 's' || Verificar.toLowerCase() == 'sim'){
        AddArrayFlashCards(Filtro)
    } else {
        console.log("OPERAÇÃO ABORTADA")
        RetornarMenu()
    }
    salvarDados(DBMASTER2, flashcardsdb, () =>{
        console.log("FLASHCARD REMOVIDO")
        RetornarMenu()
        return 0
    })
}