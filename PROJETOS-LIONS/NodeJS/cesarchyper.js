import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

function Cifrar(texto, deslocamento) {
    let cifradopapai = "";
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    const bagulho = deslocamento % 26
    texto = texto.toLowerCase();
  
    for (let i = 0; i < texto.length; i++) {
      const caractere = texto[i];
      if (alfabeto.indexOf(caractere) === -1){
        cifradopapai += caractere
        continue;
      }
      const pos = alfabeto.indexOf(caractere);
      let novaPos = pos + bagulho;

      if (novaPos < 0) {
        novaPos += 26;
      }
      novaPos = novaPos % 26;
      const codzin = alfabeto[novaPos];
      cifradopapai += codzin;
      }
      return cifradopapai;
    }

function BruteForce(Entrada){
    var a = 0
    for(var i=1; i < 27; i++){
        a++
        console.log( a + ". " + Cifrar(Entrada, a))
    }
}

const INPtexto = prompt("Digite um texto para criptografar/descriptografar: ")
const BF = prompt("deseja fazer BRUTE FORCE?")
if (BF == 's'|| BF == 'sim'){
    BruteForce(INPtexto)
} else {
    const INPdeslocamento = prompt("Digite a quantia de letras para deslocar: ")
    console.log(Cifrar(INPtexto, INPdeslocamento))
}