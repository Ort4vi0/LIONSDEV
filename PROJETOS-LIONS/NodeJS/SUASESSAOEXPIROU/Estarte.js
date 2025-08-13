import { LimparTela, prompt } from "./dep/dependencia.js";
import { AddPessoa, carregarDados, DBMASTER } from "./dep/salvar.js";
import { AdicionarPessoa } from "./Funções/AdicionarPessoa.js";
import { ListarPessoas } from "./Funções/ListarPessoa.js";

export function Menu() {
  LimparTela();
  console.log("==== BEM VINDO(A) AO GERENCIAMENTO DE CONTATOS ===");
  console.log(
    "Escolha uma das opcoes abaixo:\n 1 - Adicionar Pessoa \n 2 - Listar Pessoa(s)\n 3 - Remover Pessoa(s)\n 4 - Atualizar Pessoa(s)\n 0 - Encerrar"
  );
  const Escolha1 = prompt("> ")
  const Escolha = Escolha1.trim()
  switch (Escolha) {
    case "1":
      LimparTela();
      AdicionarPessoa();
      break;
    case "2":
      ListarPessoas();
      break;
    case "3":
      RemoverPessoa()
      break;
    case "4":
      EditarPessoa()
      break;
    case "0":
      process.exit()
    default:
      console.log("Digite uma opção válida");
      return Menu();
  }
}

export function Iniciar() {
  console.log("Iniciando o sistema...");
  carregarDados(DBMASTER, (pessoas) => {
    AddPessoa(pessoas);
    Menu();
  });
}

Iniciar()