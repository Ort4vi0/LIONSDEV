const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.prompt();

const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.~^";
let senha = "";
gerarsenha()

function gerarsenha(){
    caracteres.charAt(0);
rl.question("Qual o tamanho que deseja em sua senha? ", (restamanho) => {
    if(restamanho == "sair"){
        process.exit()
    }
  const tamanho = parseInt(restamanho, 10);
  if(isNaN(tamanho) || tamanho > 100){
    console.clear()
    console.log("Isso que foi inserido n e um numero ou passou do limite de 100 caracteres bocó")
    gerarsenha();
} else {
    console.clear()
    console.log(`Voce escolheu o tamanho de ${tamanho} caracteres`);
    
    for (let i = 0; i < tamanho; i++) {
    const Pegarocaracterealeatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(Pegarocaracterealeatorio).trim();
  }
  console.log(`Entao receba essa senha: ${senha}`);
  process.exit();
}
});
}
