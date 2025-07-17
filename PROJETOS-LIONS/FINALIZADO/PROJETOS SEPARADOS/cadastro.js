const readline = require("readline");
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let catalogo = [];
let funcionarios = [];

const BancoDeFuncionarios = "Banco.json"


function salvarFuncionario(){
    const jsonString = JSON.stringify(funcionarios, null, 2);
    fs.writeFile(BancoDeFuncionarios, jsonString, (err) => {
        if (err) {
          console.log('Erro ao salvar o arquivo:', err);
        } else {
          console.log('Arquivo salvo com sucesso!');
        }
      });
}

fetch("BancoDeFuncionarios.json").then((response) => {
    response.json().then((usuarios) => {
        console.log(usuarios)
    })
})


function Inicio() {
  console.log(`=`.repeat(15) + `CATALOGO` + `=`.repeat(15));
  rl.question(
    "Bem vindo(a), o que deseja fazer?\n 1 - Cadastro\n 2 - Listar Produtos Cadastrados\n 3 - Deletar Produto Cadastrado \n Selecione uma das opções: ",
    (pergunta01) => {
      switch (pergunta01) {
        case "1":
          console.clear();
          Cadastro();
          break;
        case "2":
          console.clear();
          ListarProdutos();
          break;
        case "3":
            console.clear();
            DeletarProduto();
            break;
        case "4":
            console.clear()
            CadastradoAdmin()
            break;
        case "sair":
            process.exit()
        case "add":
            etapadescolha()
            break
        case "salvar":
            salvarFuncionario()
            Inicio()
            break;
        default:
            console.clear()
            console.log("Digite uma OPÇÃO VALIDADA!!")
            Inicio()
            break
      }
    }
  );
}

function Cadastro() {
  rl.question("Inisira o nome do produto para cadastra-lo: ", (cad_produto) => {
    let numeroaleatrio = Math.random() * 10000;
    ID = Math.floor(numeroaleatrio);
    catalogo.push({
      ID,
      Nome: cad_produto,
    });
    console.log(
      `O produto: ${cad_produto} foi inserido com sucesso no BANCO DE DADOS!!`
    );
    rl.question("Deseja cadastrar um novo produto?? s/n: ", (confirmnewproduct) => {
        confirmnewproduct = confirmnewproduct.toLowerCase()
      if (confirmnewproduct == "s" || confirmnewproduct == "sim") {
        console.clear()
        Cadastro();
      } else {
        console.clear()
        Inicio();
      }
    });
  });
}

function ListarProdutos() {
  if (catalogo.length == 0) {
    console.log("Não ha produtos cadastrados!!");
    Inicio();
  } else {
    console.log("==== Produtos Cadastrados no momento ===");
    catalogo.forEach((catalogo, index) => {
      console.log(`${index + 1}. ID: ${catalogo.ID} | Nome: ${catalogo.Nome}`)
    });
    rl.question("Retornar ao menu Iniciar?: ", returnmenu => {
        returnmenu = returnmenu.toLowerCase()
        if(returnmenu == "s" || returnmenu == "sim"){
            console.clear()
            Inicio()
        }})}}

function DeletarProduto(){
    if(catalogo.length == 0){
        console.log("Não há produtos cadastrados... Retornando!!")
        Inicio()
    } else {
        console.log("==== Produtos Cadastrados no momento ===");
        catalogo.forEach((catalogo, index) => {
        console.log(`${index + 1}. ID: ${catalogo.ID} | Nome: ${catalogo.Nome}`)
    });
        console.log("====== DANGER ZONE - AREA DE DELEÇÃO ======")
        rl.question("Digite sua credencial para autorizar o acesso!!!: ", autorizacaoID => {
            let Autorizacao = parseInt(autorizacaoID);
            const indexID2 = ChaveDeAutorizacao.findIndex(obj => obj.Chaves === Autorizacao)
            if(ChaveDeAutorizacao.findIndex(autorizacaoID) = -1){
                console.log("VOCE NAO POSSUI AUTORIDADE PARA USAR O SISTEMA DE DELEÇÃO!!!")
            } else {
                rl.question("Insira o ID do produto que deseja DELETAR!!: ", inputIDDELETE =>{
                    let SeletorCatalogo = parseInt(inputIDDELETE);
                    const indexID = catalogo.findIndex(obj => obj.ID === SeletorCatalogo)
                    rl.question(`Voce escolheu remover o item ${JSON.stringify(catalogo[indexID])} Confirme sua remoção com SIM ou rejeite-a com NAO: `,(confirmacaocat) => {
                        confirmacaocat = confirmacaocat.toLowerCase()
                        if(confirmacaocat == "s" || confirmacaocat == "sim"){
                            catalogo.splice(indexID, 1)
                            console.log(`O item ${inputIDDELETE} foi REMOVIDO do CATALOGO!!!`)
                            Inicio()
                        } else {
                            console.log("Operação de REMOÇÃO ABORTADA!!")
                            Inicio()
                        }
                    })
                })}})
    }
}

function etapadescolha() {
  rl.question(
    `=`.repeat(20) + `CADASTRO FUNCIONARIOS` + `=`.repeat(20) + `\nBem vindo(a) ao cadastro, selecione uma das opções abaixo: \n 1 - Adicionar funcionario \n 2 - Exibir todos os funcionarios cadastrados \n 3 - Editar funcionario \n 4 - Remover funcionario \n 5 - Sair \n 6 - Funcionario com Maior e Menor Salario \n Funcionarios Atuais: ${funcionarios.length} \nInsira aqui: `,
    (opcao) => {
      switch (opcao) {
        case "1":
          cadastro();
          break;
        case "2":
          console.clear();
          listarFuncionarios();
          etapadescolha();
          break;
        case "3":
          console.clear();
          editarFuncionario();
          break;
        case "4":
          console.clear();
          deletarfuncionario();
          break;
        case "5":
          rl.question(
            "Ao sair voce perdera tudo!!! Deseja mesmo sair??",
            (sairsimounao) => {
                sairsimounao = sairsimounao.toLocaleLowerCase()
              if (sairsimounao == "s" || sairsimounao == "sim") {
                console.clear();
                process.exit();
              } else {
                console.log("Saida abortada");
                return etapadescolha();
              }
            }
          );
          break;
        case "6":
          maiorsalario();
          break;
        case "cad":
            console.clear()
            Inicio()
            break
        default:
          console.log("Insiria uma opcao valida");
          etapadescolha();
          break;
      }
    }
  );
}

function cadastro() {
  console.log("Bem vindo a etapa de CADASTRO siga as intruções:");
  rl.question("Digite o nome do(a) funcionario(a): ", (nome) => {
    rl.question("Inisira o cargo: ", (cargo) => {
        rl.question("Admin? s/n: ", PerguntaAdmin01 => {
            if(PerguntaAdmin01 == "s" || PerguntaAdmin01 == "sim"){
                Admin = "True"
            } else {
                Admin = "False"
            }
      rl.question("Insria o Salario do mesmo: ", (salario) => {
        if (salario <= 0 || isNaN(salario)) {
          console.log("O Salario Digitado não é um numero ou um salario invalido foi inserido!!! ");
          etapadescolha();
        } else {
          let numeroaleatrio = Math.random() * 10000;
          FuncionarioNumero = Math.floor(numeroaleatrio)
          funcionarios.push({
            FuncionarioNumero,
            nome,
            cargo,
            Admin,
            salario: parseFloat(salario),
          });
          console.log("Funcionario cadastrado com sucesso");
          salvarFuncionario();
          etapadescolha();
        }
        })
      });
    });
  });
}

function listarFuncionarios(){
    console.log("Aqui esta a lista de funcionarios cadastrados:");
    funcionarios.forEach((funcionarios, index) => {
        console.log()
        //console.log(`${index + 1}. ID: ${funcionarios.FuncionarioNumero} | Nome:${funcionarios.nome} | Cargo: ${funcionarios.cargo} | Salario: R$${funcionarios.salario} | Admin: ${funcionarios.Admin}`)
    })
}

function editarFuncionario() {
  console.log("Lista de funcionarios no momento:");
  if (funcionarios.length != 0) {
    console.log(
      `O numero Total de Funcionarios no momento é de: ${funcionarios.length}`
    );
    console.log(funcionarios);
    rl.question("Escolha o funcionario que deseja editar: ", (aeditar) => {});
  } else {
    console.log("Nenhum funcionario cadastrado no momento!!");
    etapadescolha();
  }
}

function deletarfuncionario() {
  if (funcionarios.length != 0) {
    console.clear();
    listarFuncionarios()
    console.log("Escolha o funcionario que deseja remover:");
    rl.question("", (SeletorDeFuncionarioEtapa1) => {
      let SeletorDeFuncionario = parseInt(SeletorDeFuncionarioEtapa1);
      const indexID = funcionarios.findIndex(obj => obj.FuncionarioNumero === SeletorDeFuncionario)
      rl.question(`Voce escolheu remover o funcionario ${JSON.stringify(funcionarios[indexID])} Confirme sua remoção com SIM ou rejeite-a com NAO: `,(confirmacao) => {
          confirmacao = confirmacao.toLocaleLowerCase();
          if (confirmacao == "sim" || confirmacao == "s") {
            funcionarios.splice(indexID, 1)
            console.log("Com a REMOCAO do FUNCINARIO agora tem os seguintes FUNCIONARIOS na empresa");
            console.log(funcionarios);
            etapadescolha();
          } else {
            console.clear();
            console.log("Voce ABORTOU a Remoção do Funcionario RETRONANDO!!");
            etapadescolha();
          }
        }
      );
    });
  } else {
    console.log("Não tem funcionarios para serem REMOVIDOS!!!");
    etapadescolha();
  }
}

function maiorsalario() {
  if (funcionarios.length >= 2) {
    let FuncionarioMaiorSalario = funcionarios[0];
    for (let i = 1; i < funcionarios.length; i++) {
      if (funcionarios[i].salario > FuncionarioMaiorSalario.salario) {
        FuncionarioMaiorSalario = funcionarios[i];
      }
    }
    console.log(
      `=============== Funcionario com Maior Salario: ${FuncionarioMaiorSalario.nome} ${FuncionarioMaiorSalario.cargo} ${FuncionarioMaiorSalario.salario}`
    );
    menorsalario();
    etapadescolha();
  } else {
    console.log("Não tem funcionarios suficientes para comparacao MIN 2");
    etapadescolha();
  }
}

function menorsalario() {
  let FuncionarioMenorSalario = funcionarios[0];
  for (let i = 1; i < funcionarios.length; i++) {
    if (funcionarios[i].salario < FuncionarioMenorSalario.salario) {
      FuncionarioMenorSalario = funcionarios[i];
    }
    console.log(
      `O Funcionario com Menor salario: ${FuncionarioMenorSalario.nome} ${FuncionarioMenorSalario.cargo} ${FuncionarioMenorSalario.salario} ===============`
    );
  }
}

Inicio();