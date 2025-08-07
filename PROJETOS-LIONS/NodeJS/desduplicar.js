import PromptSync from "prompt-sync";
const prompt = PromptSync({ sigint: true });

let pepino = []

function Desduplicar() {
    pepino = pepino.filter((oboyo, index) => pepino.indexOf(oboyo) === index)
    Gorigo()
}


function Gorigo(){
const coiso = prompt("Ache um coiso ai: ")
switch(coiso){
    case '1':
        ColocaralgonaArray()
    case '2':
        Desduplicar()
    case '3':
        console.log(pepino)
        Gorigo()
}
}
function ColocaralgonaArray(){
    const Colocar = prompt("Digite algo: ")
    if(Colocar == "stop"){
        Gorigo()
        return;
    }
    pepino.push(Colocar)
    console.log(pepino)
    ColocaralgonaArray()
}
Gorigo()