import { LimparTela, prompt, RetornarMenu, VerificarQNTflashcard } from "../../dep/dep.js";
import { flashcardsdb } from "../../dep/salvar.js";


export function BuscarPorPergunta(){
    VerificarQNTflashcard()
    Busca()
}

function Busca(){
    LimparTela()
    console.log("===== PERGUNTE ALGO =====")
    const INPPERGUNTA = prompt("Digite a PEGUNTA: ")
    const Filtro = flashcardsdb.filter((flashcard) => flashcard.Pergunta === (INPPERGUNTA.toLowerCase()))
    LimparTela()
    Filtro.forEach((flashcard) => {
        console.log(`Resposta: ${flashcard.Resposta}`)
    })
    RetornarMenu()
}

   