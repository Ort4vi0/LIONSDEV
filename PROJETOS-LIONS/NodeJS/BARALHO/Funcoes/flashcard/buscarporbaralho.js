import { LimparTela, prompt, RetornarMenu, VerificarQNTflashcard } from "../../dep/dep.js";
import { baralhos, flashcardsdb } from "../../dep/salvar.js";
import { ListarBaralho2 } from "../baralho/Listar.js";


export function BuscarPorBaralho(){
    VerificarQNTflashcard()
    Busca()
}

function Busca(){
    ListarBaralho2()
    const INPID = prompt("Digite o ID do Baralho para listar os FLASHCARDS pertecentes: ")
    const Filtro = flashcardsdb.filter((flashcard) => flashcard.IDBaralho === parseInt(INPID))
    const IndexBaralho = baralhos.findIndex((baralho) => baralho.ID === parseInt(INPID))
    const FiltarBaralho = baralhos[IndexBaralho]
    LimparTela()
    console.log(`==== FLASHCARDS DE ${FiltarBaralho.Nome} ====`.toUpperCase())
    Filtro.forEach((flashcard) => {console.log(`ID: ${flashcard.ID} | Pergunta: ${flashcard.Pergunta} | Resposta: ${flashcard.Resposta}`)})
    RetornarMenu()
}

   