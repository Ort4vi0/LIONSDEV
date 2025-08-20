import { LimparTela, prompt, RetornarMenu, VerificarQNTflashcard } from "../../dep/dep.js";
import { baralhos, DBMASTER2, flashcardsdb, salvarDados } from "../../dep/salvar.js";
import { ListarBaralho2 } from "../baralho/Listar.js";
import { ListarFlashCards2 } from "./Listar.js";


export function EditarFlashCard(){
    LimparTela()
    console.log("====== EDIÇÃO DE FLASHCARDS ======")
    VerificarQNTflashcard()
    Editor()
}

function Editor(){
    ListarFlashCards2()
    const INPID = prompt("Selecione um flashcard para edição(ID): ")
    const ID_to_INDEX = flashcardsdb.findIndex((flashcard) => flashcard.ID === parseInt(INPID))
    const Filtro = flashcardsdb[ID_to_INDEX]

    const NovaPergunta = prompt(`Insira uma nova pergunta (ou deixe em BRANCO para manter a atual) Pergunta Atual: ${Filtro.Pergunta} Nova Pergunta: `)
    const NovaResposta = prompt(`Insira uma nova resposta (ou deixe em BRANCO para manter a atual) Resposta Atual: ${Filtro.Resposta} Nova Resposta: `)

    if(NovaPergunta.trim() !== ''){
        Filtro.Pergunta = NovaPergunta
    }
    if(NovaResposta.trim() !== ''){
        Filtro.Resposta = NovaResposta
    }

    const TrocadeBaralho = prompt(`Deseja Trocar o FlashCard de Baralho?(s/n): `)
    if(TrocadeBaralho.toLowerCase() == "s" || TrocadeBaralho.toLowerCase() == "sim"){
        const ID_to_INDEX2 = baralhos.findIndex((baralho) => baralho.ID === Filtro.IDBaralho)
        const Filtro2 = baralhos[ID_to_INDEX2]
        ListarBaralho2()
        let NovoBaralho = prompt(`Digite o ID do baralho que quer inserir o flashcard. Baralho Atual: ${Filtro2.Nome}(${Filtro2.ID})`)

        if(Filtro2 !== -1){
            Filtro.IDBaralho = parseInt(NovoBaralho)
        }   
    }
    Salvar()
}

function Salvar(){
    salvarDados(DBMASTER2, flashcardsdb, () => {
        console.log("Edições Salvas!!")
        RetornarMenu()
    })
}