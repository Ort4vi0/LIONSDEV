let idadeInput = prompt ("Por favor, digite a sua idade: "); //solicita a idade e armazena em uma variavel
let idade = parseInt(idadeInput); // converte o texto para numero
if(idade > 18) /* verifica a idade para ver se e maior que 18*/ {
    alert("Voce é maior de idade!! Acesso liberado")
    console.log("O usuario te, " + idade + " anos e é maior de idade.");
} else {
    alert("Você é menor de idade! acesso negado.");
    console.log("O usuario tem " + idade + " anos e é menor de idade.");
}

console.log("Fim da verificação.")