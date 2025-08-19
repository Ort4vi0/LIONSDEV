import PromptSync from "prompt-sync";
import { MenuPrincipal } from "../Baralho.js";
export const prompt = PromptSync({ sigint: true });

export function RetornarMenu(){
    prompt("Pressione ENTER para voltar...")
    MenuPrincipal()
}

export function LimparTela(){
    console.clear()
}