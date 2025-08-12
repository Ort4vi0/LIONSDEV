import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

function Vogais(str) {
    const achados = str.match(/[aeiou]/gi);
    return achados ? achados.length : 0;
  }
  
  function Vogais2(str) {
    const vogais = {
      'a': 0,
      'e': 0,
      'i': 0,
      'o': 0,
      'u': 0
    };
  
    for (const char of str.toLowerCase()) {
      if (char in vogais) {
        vogais[char]++;
      }
    }
  
    return vogais;
  }

  const p = prompt("Digite algo: ");

  console.log("Há um total de " + Vogais(p) + " vogais.");
  
  const contagemDetalhada = Vogais2(p);
  console.log("Contagem detalhada de cada vogal:");
  console.log("A: " + contagemDetalhada.a);
  console.log("E: " + contagemDetalhada.e);
  console.log("I: " + contagemDetalhada.i);
  console.log("O: " + contagemDetalhada.o);
  console.log("U: " + contagemDetalhada.u);
