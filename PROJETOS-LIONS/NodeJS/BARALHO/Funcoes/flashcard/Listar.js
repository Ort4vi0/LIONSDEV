import { LimparTela, RetornarMenu } from "../../dep/dep.js";
import { flashcardsdb } from "../../dep/salvar.js";

export function ListarFlashCards(){
    LimparTela()
    console.log(`=== FLASHCARDS ATUAIS: ${flashcardsdb.length}`)
    if(flashcardsdb.length < 1){
        console.log("Não há FLASHCARDS para serem listados!!")
        RetornarMenu()
    } else {
        Listar()
    }
}

function Listar(){
    flashcardsdb.forEach((flashcard) => {
        console.log(`ID: ${flashcard.ID} || Pergunta: ${flashcard.Pergunta} || Resposta: ${flashcard.Resposta}`)
    })
    RetornarMenu()
}