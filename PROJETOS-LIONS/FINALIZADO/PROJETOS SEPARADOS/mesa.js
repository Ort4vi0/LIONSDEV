// push adiciona elemento
// pop remone o ultimo elemente
// shift remove primeiro elementos do array
// unshift adiciona um elemento no comeco
// splice deleta de tanto a tanto
// slice seleciona quais objetos pegar ex: slice(1,3)
// includes verifica se o indice existe
// indexof verifica em qual indicde esta o objeto
// lenght verifica o tamanho do array

// CRUD - CREATE - READ - UPDATE - DELETE


// Criar um elemento no inicio do array
// remover o elemento do inicio do array

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.prompt()

let minhamesa = ["Otavio", "Roderval", "Luan", "Sassi"]
let eu = minhamesa.shift()
console.log(`Meu nome é ${eu} e dos meus colegas são ${minhamesa}`)
minhamesa.push("Paraizo")
console.log(`O ${minhamesa[3]} se mudou para a mesa agora somos ${eu},${minhamesa}`)
rl.question(`Com a chegada do ${minhamesa[3]} alguem prescisa se mudar \n 1 - ${minhamesa[0]} \n 2 - ${minhamesa[1]} \n 3 - ${minhamesa[2]}\n digite um numero para escollher: `, escolha => {
    escolha = escolha -1
    pessoatirada = minhamesa.splice(escolha, 1)
    console.log(`Você escolheu tirar o ${pessoatirada} e agora a mesa e composta por ${eu},${minhamesa}`)
    process.exit()
})