const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//gerar a escolha da maquina
var bagulho = ["pedra", "papel", "tesoura"];
let numero = Math.random() * 3;
numeroaleatrio = Math.floor(numero)
machinechoice = bagulho[numeroaleatrio]
console.log(machinechoice) //mostra a escolha da maquina
//questiona o usuario de sua jogada

function limpar(){
    console.clear()
    process.exit()
}

rl.question("Escolha entre pedra, papel e tesoura: ", userchoice => {
    //logica de perda e ganho
    if(userchoice == machinechoice){
        console.log("Empate")
    } else if(userchoice == "pedra" && machinechoice == "tesoura"){
        console.log("Voce estrassalhou a tesoura com sua pedra!! Ganhaste")
        limpar()
    } else if(userchoice == "papel" && machinechoice == "pedra"){
        console.log("Voce embrulhou a pedra pode fum... digo prender ele!! Ganhaste")
        limpar()
    } else if(userchoice == "tesoura" && machinechoice == "papel"){
        console.log("Voce deu uma tesourada no papiro e o perfurou!! Ganhaste")
        limpar()
    } else if(userchoice == "pedra" && machinechoice == "papel"){
        console.log("Voce teve sua pedra embrulhada!! Perdeste")
        limpar()
    } else if(userchoice == "papel" && machinechoice == "tesoura"){
        console.log("Seu papel foi obliterado pela tesoura despedaçando ele!! Perdeste")
        limpar()
    } else if(userchoice == "tesoura" && machinechoice == "pedra"){
        console.log("Voce tentou furar a pedra com a tesoura mas.... As leis da fisica n permitiram!! Perdeste")
    }
    limpar()
})                                                                                                                                                                                             