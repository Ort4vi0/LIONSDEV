import { LimparTela, prompt, RetornarMenu } from "../../dep/dep.js";
import { baralhos, DBMASTER, salvarDados } from "../../dep/salvar.js";
import { ListarBaralho2 } from "./Listar.js";


export function EditarBaralho(){
    LimparTela()
    console.log("=== EDITOR BARALHOS ===")
    if(baralhos.length < 1){
        console.log("Não HÁ baralhos cadastrados!")
        RetornarMenu()
    } else {
        Editor()
    }
}

function Editor(){
    ListarBaralho2()
    let INPID = prompt("Selecione o baralho desejado(ID): ")
    INPID = parseInt(INPID)
    const ID_to_INDEX = baralhos.findIndex((baralho) => baralho.ID === INPID)
    const Filtro = baralhos[ID_to_INDEX]
    const NomeAtual = baralhos[ID_to_INDEX].Nome

    const NovoNome = prompt(`Digite o novo nome para o baralho. (deixe em branco para manter o atual) Nome Atual: (${Filtro.Nome}): `)
    if(NovoNome.trim() !== ''){
        Filtro.Nome = NovoNome
    }
    let Confirmar = prompt(`Deseja Confirmar a troca de nome de (${NomeAtual}) para (${NovoNome})?(s/n): `)
    if(Confirmar.toLowerCase() == 's' || Confirmar.toLowerCase() == 'sim'){
        SalvarEdicao()
    } else{
        console.log("Edição abortada!!")
        RetornarMenu()
        return 0
    }
}

function SalvarEdicao(){
    salvarDados(DBMASTER, baralhos, () =>{
        console.log(`Troca de NOME CONCLUIDA!`)
        RetornarMenu()
        return 0
    })
}