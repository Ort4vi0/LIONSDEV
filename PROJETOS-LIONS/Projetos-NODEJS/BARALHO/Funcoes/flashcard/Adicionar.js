import { LimparTela, RetornarMenu, prompt } from "../../dep/dep.js";
import { baralhos, DBMASTER2, flashcardsdb, salvarDados } from "../../dep/salvar.js";
import { ListarBaralho2 } from "../baralho/Listar.js";


export function CriarFlashCard(){
    LimparTela()
    console.log("=== CRIAÇÃO DE FLASHCARD ===")
    if(baralhos.length < 1){
        console.log("NÃO HÁ BARALHOS DISPONIVEIS PARA ADIÇÃO DE FLASHCARDS!!!")
        RetornarMenu()
        return
    }
    ListarBaralho2()
    const INPbaralho = prompt("Em qual baralho irá inserir o flahscard? ")
    const baralhoINP = parseInt(INPbaralho)
    const baralhoEncontrado = baralhos.find(({ID}) => ID === baralhoINP);
    if (!baralhoEncontrado) {
        console.log("Baralho não encontrado. Tente novamente.");
        RetornarMenu();
        return;
    } else {
        const INPperguntaflashcards = prompt("Digite a pergunta: ")
        const INPrespostaflashcards = prompt("Digite a resposta: ")
        const FlashCard = {
            ID: Date.now(),
            IDBaralho: baralhoEncontrado.ID,
            Pergunta: INPperguntaflashcards,
            Resposta: INPrespostaflashcards
        }
        flashcardsdb.push(FlashCard)
        salvarDados(DBMASTER2, flashcardsdb, () => {
            console.log("FlashCard Criado com SUCESSO...")
            RetornarMenu()
            })
    }
}
