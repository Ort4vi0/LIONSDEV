import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

function Vogais(str){
    const achados = str.match(/[aeiou]/gi)

    return achados ? achados.length : 0;
}

function Vogais2(str){
    const a = str.match(a)
}

const p = prompt("Digite algo ")
console.log("Há um total de " + Vogais(p) + " Vogais.")

