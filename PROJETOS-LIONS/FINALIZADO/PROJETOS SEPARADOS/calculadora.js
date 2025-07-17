const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.prompt()
let resultado = 3

rl.question("Digite o primeiro numero: ", (numero1) => {
  rl.question("---------------------------\n 1 - adicao \n 2 - subtracao \n 3 - multiplicacao \n 4 - divisao \n 5 - riaz \n ou digite SAIR para sair \nSelecione o operador: ", (escoperador) => {
    rl.question("Digite o segundo numero: ", (numero2) => {
      switch(escoperador){
        case '1':
          resultado = parseFloat(numero1) + parseFloat(numero2);
          escoperador = "adicao"
          break;
        case '2':
          resultado = parseFloat(numero1) - parseFloat(numero2);
          escoperador = "subtracao"
          break;
        case '3':
          resultado = parseFloat(numero1) * parseFloat(numero2);
          escoperador = "multiplicador"
          break;
        case '4':
          resultado = parseFloat(numero1) / parseFloat(numero2);
          escoperador = "divisao"
          break;
        case '5':
          resultado = Math.sqrt(numero1)
          escoperador = "raiz"
          numero2 = 0
          console.log("Voce escolheu raiz o que anulou o segundo numero inserido")
          break;
        case 'sair':
          process.exit()
        default:
          console.log("Voce inseriu um operador erronio")
          break;
      }
      if (escoperador != 'raiz') {
      console.log(`Você digitou: ${numero1} como primeiro numero e ${numero2} usando o operador: ${escoperador}, resultado em ${resultado}`);
      } else {
        console.log(`A raiz de ${numero1} é ${resultado}`)
      }
      rl.close();
    });
  });
});

