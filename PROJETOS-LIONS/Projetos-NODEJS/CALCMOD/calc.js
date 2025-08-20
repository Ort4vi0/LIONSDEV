import PromptSync from 'prompt-sync';
const prompt = PromptSync();
import { soma, multiplicacao, divisao, subtracao } from './operecao.js';

let NUMERO1 = prompt('Inisria um numero: ')
NUMERO1 = parseFloat(NUMERO1)
let NUMERO2 = prompt('Inria outro numero: ')
NUMERO2 = parseFloat(NUMERO2)
let operacao = prompt('Qual opercação deseja? 1- Soma 2- Subtracao 3- Multiplicacao 4- Divisao')
let resultado
let operacaonome
switch (operacao){
    case '1':
        resultado = soma(NUMERO1, NUMERO2)
        operacaonome = "SOMA"
        break;
    case '2':
        resultado = subtracao(NUMERO1, NUMERO2)
        operacaonome = "SUBTRACAO"
        break;
    case '3':
        resultado = multiplicacao(NUMERO1, NUMERO2)
        operacaonome = "MULTIPLICACAO"
        break;
    case '4':
        resultado = divisao(NUMERO1, NUMERO2)
        operacaonome = "DIVISAO"
        break;

}

console.log(`O resultado da sua operacação de ${operacaonome} é: ${resultado}`);