import { LimparTela, RetornarMenu, VerificarQNTflashcard } from "../../dep/dep.js";
import { flashcardsdb } from "../../dep/salvar.js";

export function ListarFlashCards(){
    LimparTela()
    console.log(`=== FLASHCARDS ATUAIS: ${flashcardsdb.length}`)
    VerificarQNTflashcard()
    Listar()
}

function Listar(){
    flashcardsdb.forEach((flashcard) => {
        console.log(`ID: ${flashcard.ID} || Pergunta: ${flashcard.Pergunta} || Resposta: ${flashcard.Resposta}`)
    })
    RetornarMenu()
}

export function ListarFlashCards2(){
    flashcardsdb.forEach((flashcard) => {
        console.log(`ID: ${flashcard.ID} || Pergunta: ${flashcard.Pergunta} || Resposta: ${flashcard.Resposta}`)
    })
}