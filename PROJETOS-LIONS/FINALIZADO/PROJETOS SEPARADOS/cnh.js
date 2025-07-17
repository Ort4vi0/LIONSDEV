// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('Por favor, diigite seu nome: ', (nome) => {
//     rl.question(`Agora, digite a sua idade: `, (idade) => {
//         console.log(`\nOlá, ${nome}! Você tem ${idade} anos. Seja bem-vindo(a)!`);
//         rl.close();
//     });
// });

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// rl.question('Por favor digite seu nome: ', (nome) => {
//     rl.question('Agora digite sua idade: ',(idade) => {
//         rl.question("Você possui CNH? (S/N): ", (respostaCNH) => {
//             let temCNH = false;
//             if(respostaCNH.toLowerCase() === 'sim' || respostaCNH.toLowerCase() === 's'){temCNH = true;}
//         console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
//     if (temCNH) {
//         console.log("Parabens você pode dirigir!!!");
//     } else {
//         console.log("Que pena, vc ainda n pode dirigir");
//     }

//     rl.close();
// });});})

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Por favor digite seu nome: ", (nome) => {
  rl.question("Agora digite sua idade: ", (idade) => {
    rl.question("Você possui CNH? (S/N): ", (respostaCNH) => {
      const usuario = {
        nome: nome,
        idade: parseInt(idade),
        possuiCNH:
          respostaCNH.toLocaleLowerCase() === "sim" ||
          respostaCNH.toLocaleLowerCase() == "s" ||
          respostaCNH.toLocaleLowerCase() == "xuxa",
      };

      console.log("\n --- Ficha de usuario ---");
      console.log(`Nome: ${usuario.nome}`);
      console.log(`Idade: ${usuario.idade}`);

      const statusCNH = usuario.possuiCNH ? "Tem, ele sabe mt GOAT" : "nao tem mt burro";
      console.log(`Possui CNH? ${statusCNH}`);
      console.log("--------------------------");

      console.log("\nObjeto completo: ");
      console.log(usuario);
      rl.close();
    });
  });
});


do {
  
} while (condition);
