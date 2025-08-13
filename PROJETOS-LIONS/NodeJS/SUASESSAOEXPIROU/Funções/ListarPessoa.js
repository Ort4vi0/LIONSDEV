import { LimparTela, Voltar } from "../dep/dependencia.js";
import { pessoas } from "../dep/salvar.js";

export function ListarPessoas(){
    LimparTela()
    console.log(`--------- PESSOAS CADASTRADAS: ${pessoas.length} ---------`)
    pessoas.forEach((pessoa) => {
        console.log(`ID: ${pessoa.ID} || NOME: ${pessoa.Nome} || TELEFONE: ${pessoa.Telefone} || EMAIL: ${pessoa.Email}`)
    })
    Voltar()
}