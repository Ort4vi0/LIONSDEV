let resposta = prompt("Voce gosta de cafe? (responda com sim e nao)");

let respostaFormatatada = resposta.toLocaleLowerCase();

if(respostaFormatatada === "sim" || respostaFormatatada === "s") {
    alert("Que otimo! um cafe anima o dia mas so se for bom");
    console.log("O usuario falou que gosta de cafe!!!!!");  
} else if (respostaFormatatada === "nao" || respostaFormatatada === "n") {
    alert("Tudo bem talvez um cha seja uma boa pedida!!");
    console.log("O usuario respondeu que nao gosta de cafe");
} else {
    alert("Desculpe nao entendi o que vc escreve, pq é sim ou não tongo(a)");
    console;log("O usuario deu uma responde invalida: " + resposta); 
}

console.log("fim da verificacao")