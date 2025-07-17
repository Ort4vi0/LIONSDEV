const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.prompt()

rl.question('Digite a tabuada que quer calcular: ', tabuada => {
    console.log(`Voce escolheu a tabuada do: ${tabuada}`)
    parseInt(tabuada)
    for(let vezes = 1; vezes < 101; vezes++){
        let resultado = (tabuada * vezes)
        console.log(`${tabuada} vezes ${vezes} e igual a ${resultado}`)
    }
    process.exit()
})