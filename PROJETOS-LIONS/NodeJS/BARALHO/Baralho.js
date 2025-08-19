import { LimparTela, prompt } from "./dep/dep.js"
import { AddArrayBarralho, AddArrayFlashCards, carregarDados, DBMASTER, DBMASTER2} from "./dep/salvar.js"
import { CriarBaralho } from "./Funcoes/baralho/Adicionar.js"
import { EditarBaralho } from "./Funcoes/baralho/Editar.js"
import { ListarBaralho } from "./Funcoes/baralho/Listar.js"
import { ListarFlashCards } from "./Funcoes/flashcard/Listar.js"
import { CriarFlashCard } from "./Funcoes/flashcard/Adicionar.js"
import { DeletarBaralho } from "./Funcoes/baralho/Remover.js"


export function MenuPrincipal(){
    LimparTela()
    console.log("=== SISTEMA DE DECKS DE FLASHCARDS ===")
    console.log("1 - FlashCards \n2 - Baralhos")
    const INPcategoria = prompt("Escolha uma opção: ")
    if (INPcategoria == 1){
        FlashCardsMenu()
    } else {
        BaralhoMenu()
    }
}

function BaralhoMenu(){
    LimparTela()
    console.log("===== BARALHO ======")
    console.log(" 1 - Adicionar\n 2 - Remover\n 3 - Listar\n 4 - Editar")
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
    }
}

function FlashCardsMenu(){
    LimparTela()
    console.log("===== FLASHCARD ======")
    console.log(" 1 - Adicionar\n 2 - Remover\n 3 - Listar\n 4 - Editar")
    const INPflashcard = prompt("Escolha uma opção: ")
    switch (INPflashcard){
        case "1":
            CriarFlashCard()
            break;
        case "3":
            ListarFlashCards()
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