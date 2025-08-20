import { LimparTela, prompt } from "./dep/dep.js"
import { AddArrayBarralho, AddArrayFlashCards, carregarDados, DBMASTER, DBMASTER2} from "./dep/salvar.js"
import { CriarBaralho } from "./Funcoes/baralho/Adicionar.js"
import { EditarBaralho } from "./Funcoes/baralho/Editar.js"
import { ListarBaralho } from "./Funcoes/baralho/Listar.js"
import { ListarFlashCards } from "./Funcoes/flashcard/Listar.js"
import { CriarFlashCard } from "./Funcoes/flashcard/Adicionar.js"
import { DeletarBaralho } from "./Funcoes/baralho/Remover.js"
import { EditarFlashCard } from "./Funcoes/flashcard/Editar.js"
import { DeletarFlashCard } from "./Funcoes/flashcard/Remover.js"
import { BuscarPorBaralho } from "./Funcoes/flashcard/buscarporbaralho.js"
import { BuscarPorPergunta } from "./Funcoes/flashcard/buscarporpergunta.js"


export function MenuPrincipal(){
    LimparTela()
    console.log("=== SISTEMA DE DECKS DE FLASHCARDS ===")
    console.log("1 - FlashCards \n2 - Baralhos\n0 - Sair")
    const INPcategoria = prompt("Escolha uma opção: ")
    switch (INPcategoria){
        case '1':
            FlashCardsMenu()
            break;
        case '2':
            BaralhoMenu()
            break;
        case '0':
            process.exit()
    }
}

function BaralhoMenu(){
    LimparTela()
    console.log("===== BARALHO ======")
    console.log(" 1 - Adicionar\n 2 - Remover\n 3 - Listar\n 4 - Editar\n 0 - Voltar")
    const INPbaralho = prompt("Escolha uma opção: ")
    switch (INPbaralho){
        case "1":
            CriarBaralho()
            break;
        case "2":
            DeletarBaralho()
            break;
        case "3":
            ListarBaralho()
            break;
        case "4":
            EditarBaralho()
            break;
        case "0":
            MenuPrincipal()
            break;
    }
}

function FlashCardsMenu(){
    LimparTela()
    console.log("===== FLASHCARD ======")
    console.log(" 1 - Adicionar\n 2 - Remover\n 3 - Listar\n 4 - Listar Por Baralho\n 5 - Buscar Resposta\n 6 - Editar\n 0 - Voltar")
    const INPflashcard = prompt("Escolha uma opção: ")
    switch (INPflashcard){
        case "1":
            CriarFlashCard()
            break;
        case "2":
            DeletarFlashCard()
            break;
        case "3":
            ListarFlashCards()
            break;
        case "4":
            BuscarPorBaralho()
            break;
        case "5":
            BuscarPorPergunta()
            break;
        case "6":
            EditarFlashCard()
            break;
        case "0":
            MenuPrincipal()
            break;
    }
}

export function Iniciar() {
    console.log("Iniciando o sistema..."); // SAIDA
    carregarDados(DBMASTER, (baralhosdata) => {
      AddArrayBarralho(baralhosdata)
      carregarDados(DBMASTER2, (flashcardsdata) => {
        AddArrayFlashCards(flashcardsdata)
        MenuPrincipal()
      });
    });
  }

Iniciar()