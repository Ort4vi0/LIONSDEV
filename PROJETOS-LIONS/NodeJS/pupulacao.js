const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const NomePaisA = "Estados Separados da Agua"
const NomePaisB = "Repubiano Federal do Pelo"

let PopPaisA = 80000
let PopPaisB = 200000

let TaxadeCrescimentoPaisA = 0.03
let TaxadeCrescimentoPaisB = 0.015

console.log("=== Contagem População ===")

for(var i=0; PopPaisA <= PopPaisB; i++){
    PopPaisA += PopPaisA * TaxadeCrescimentoPaisA
    PopPaisB += PopPaisB * TaxadeCrescimentoPaisB
    PopPaisA = parseInt(PopPaisA)
    PopPaisB = parseInt(PopPaisB)
    console.log(`Ano atual: ${i} | População Atual ${NomePaisA}: ${PopPaisA} | População Atual ${NomePaisB}: ${PopPaisB}`)
}

console.log(`\n==== Demorou ${i} Anos para o ${NomePaisA} passar o ${NomePaisB} ====`)
