import PromptSync from "prompt-sync";
import { MenuPrincipal } from "../Baralho.js";
import { flashcardsdb } from "./salvar.js";
export const prompt = PromptSync({ sigint: true });

export function RetornarMenu(){
    prompt("Pressione ENTER para voltar...")
    MenuPrincipal()
}

export function LimparTela(){
    console.clear()
}

export function VerificarQNTflashcard(){
    if(flashcardsdb.length < 1){
            console.log("Não HÁ Flashcards para serem deletados")
            RetornarMenu()
            return 0
    }
}