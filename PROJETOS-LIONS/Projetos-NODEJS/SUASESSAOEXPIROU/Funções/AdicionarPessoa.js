import { LimparTela, eUmNumero, prompt, Voltar, FormatarTelefone } from "../dep/dependencia.js";
import { DBMASTER, pessoas, salvarDados } from "../dep/salvar.js";

export function AdicionarPessoa(){
    const Nome = prompt("Digite o NOME da pessoa: ")
        if(Nome.trim() === ''){
            console.log("Você não inseriu um nome")
            Voltar()
            return
        }
        if (eUmNumero(Nome)) {
            console.log("Você inseriu um número para o nome. Deseja salvar mesmo assim?");
            let verificar1 = prompt("(s/n): ");
            verificar1 = verificar1.toLowerCase();
            
            if (verificar1 !== "s" && verificar1 !== "sim") { //Armazena a resposta do usuário (s/n) quando um nome inserido parece ser um número.
            console.log("Operação cancelada.");
            Voltar();
            return;
            }
        }
    
    const Email = prompt("Digite o EMAIL da pessoa: ")

    const telefone = prompt("Digite o TELEFONE da pessoa: ")
        if (isNaN(telefone) || telefone.length < 10 || telefone.length > 11) {
            LimparTela()
            console.log("Voce Inseriu um telefone INVALIDO...") // SAIDA
            Voltar()
            return;
        }
        const TelefoneFormatado = FormatarTelefone(telefone);

        AdicionarPessoaNoArray(Nome, Email, TelefoneFormatado)
}

export function AdicionarPessoaNoArray(nome, email, telefone){
    const Pessoa = {
        ID: Math.floor(Date.now() / 6000),
        Nome: nome,
        Email: email,
        Telefone: telefone
    }
    pessoas.push(Pessoa)
    salvarDados(DBMASTER, pessoas, () =>{
        console.log(`Pessoa Adicionada! Nome: ${nome} Email: ${email} Telefone: ${telefone}`)
        Voltar()
    })
}