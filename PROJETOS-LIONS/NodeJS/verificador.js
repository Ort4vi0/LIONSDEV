var impar = 0, par = 0, somaimpar = 0, somapar = 0 

for(n = 0; n < 1000; n++){
    if(n % 2 == 0){
        par++
        somapar += n
        mediapar = somapar / par
    } else {
        impar++
        somaimpar = somaimpar + n
        mediaimpar = somaimpar / impar
    }
}

console.log(`===ISSO AQUI SAO NUMEROS SABE===\n O total de numeros pares é de: ${par}\n O total de numeros impares é de: ${impar}`)
console.log(`===SOMA DOS NUMEROS QUE SAO NUMEROS===\n A soma de todos os PARES resulta em: ${somapar} \n A soma de todos os IMPARES resulta em ${somaimpar} `)
console.log(`===MEDIA DE NUMEROS DOS NUMEROS QUE SAO NUMEROS===\n O numero medio dos PARES é: ${mediapar}\n O numero medio dos IMPARES é: ${mediaimpar}`)