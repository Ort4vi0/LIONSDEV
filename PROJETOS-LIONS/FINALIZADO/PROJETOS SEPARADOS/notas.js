const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.prompt()

const notas = []

console.log("\nNAO SABE SOMAR E DIVIDIR ENT ME USE LÁ ELE\n")

rl.question('Bem vindo(a) ao CALCULO DE MEDIA DE NOTAS, digite a primeira nota: ', nota1 => {
    rl.question('Agora a segunda nota: ', nota2 => {
        notas.push(nota1, nota2)
        const media = (parseFloat(notas[0]) + parseFloat(notas[1])) / notas.length
        rl.question('Digite a media da sua escola: ', media1 => {
            if (media < media1){
                console.log(`As notas adicionadas são: ${notas} e a media delas e ${media} que fica abaixo de ${media1} \n VOCE FOI REPROVADO`)  
            } else {
                console.log(`As notas adicionadas são: ${notas} e a media delas e ${media} que fica acima de ${media1} \n VOCE FOI APROVADO`)  
            }
        process.exit()
        })
    })
})