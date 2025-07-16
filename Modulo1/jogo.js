const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let jogos = [];

function menu() {
  console.log(
    "\n ==========MENU==========\n1 p/ Cadastrar NOVO jogo\n2 p/ Exibir jogos na biblioteca\n3 p/ Deletar jogo(s)\n4 p/ Editar o(s) jogo(s)\n5 p/ Maior/Menor nota\n6 p/ Sair\n========================="
  );
  rl.question("\nOpção: ", (menus) => {
    switch (menus) {
      case "1":
        console.clear();
        cadastrar();
        break;

      case "2":
        console.clear();
        if (jogos == 0){
            console.log('Nenhum jogo na biblioteca.')
            menu();
        }
        
        else{
            console.clear()
            rl.question('Você quer pesquisar algum jogo em especifio? (s/n): ', (pesquisa) => {
                pesquisa = pesquisa.toLowerCase()
                if (pesquisa == 's'){
                    rl.question('Pesquise: ', (nomePesquisado) => {
                        let pesquisado = jogos.filter(jogos => jogos.nome === nomePesquisado)
                        console.clear()
                        console.log("===========LISTA=========\n", pesquisado)
                        menu()
                    })
                } else {
                    console.clear()
                    console.log("===========LISTA=========\n", jogos);
                    menu()
                }
            })


        }
        break
      case "3":
        console.clear()
        if (jogos == 0){
            console.log('Nenhum jogo encontrado, verifique os dados.')
            menu()
        }else {
        rl.question('Digite a senha: ', (senha) =>{
            if (senha == 123){
        console.clear();
        console.log("===========LISTA=========\n", jogos);
        rl.question(
          "Qual você deseja deletar? (1 p/ primeiro, 2 p/ segundo, 3 p/...): ",
          (deletar) => {
            jogos.splice(deletar - 1, 1);
            let lido = jogos.length;
            if (deletar + 1 > lido || deletar <= 0) {
              console.clear();
              console.log("Escolha um número valido.");
            }
            console.clear()
            console.log('Jogo deletado.')
            menu();
          }
        )}else {
            console.clear()
            console.log('SENHA INCORRETA.')
            menu()
        }
    })
}
        break
      case "4":
        editar();
        break

      case "5":
        maiormenor();
        break
      case "6":
        console.clear()
        process.exit();
    }
  });
}

menu()

function cadastrar() {
  rl.question("Digite o nome do jogo: ", (nome) => {
    rl.question("Digite a nota do jogo (0 a 5): ", (nota) => {

      if (nota < 0 || nota > 5) {
        console.clear();
        console.log("Digite uma nota valida.");
        cadastrar();
      }
      rl.question("Digite a quantidade de horas jogadas: ", (horas_jogadas) => {
        horas_jogadas = parseFloat(horas_jogadas);
        jogos.push({
          nome,
          nota: parseFloat(nota),
          horas_jogadas,
        });
        console.clear();
        console.log("\nJogo cadastrado.\n");
        menu();
      });
    });
  });
}

function editar() {
  console.clear();
  console.log(jogos);
  rl.question(
    "Qual você deseja editar? (1 p/ primeiro, 2 p/ segundo, 3 p/...): ",
    (editar) => {
      rl.question("Digite o NOVO nome do jogo: ", (nome) => {
        rl.question("Digite a NOVA nota do jogo (0 a 5): ", (nota) => {
          nota = parseFloat(nota);
          rl.question(
            "Digite a NOVA quantidade de horas jogadas: ",
            (horas_jogadas) => {
              horas_jogadas = parseFloat(horas_jogadas);
              jogos[editar - 1] = {
                nome,
                nota: parseFloat(nota),
                horas_jogadas,
              };
              console.clear();
              console.log("Jogo editado.\n");
              menu();
            }
          );
        });
      });
    }
  );
}
function maiormenor() {
    let maior = -9;
    let menor = 9;
  
    var imaior = -1; 
    var imenor = -1;
  
    if (jogos.length == 0) {
        console.clear();
        console.log('Não existe jogos na biblioteca.');
        menu();
        return; 
    }

    maior = jogos[0].nota;
    menor = jogos[0].nota;
    imaior = 0; 
    imenor = 0; 

    for (let i = 1; i < jogos.length; i++) { 
      if (jogos[i].nota > maior) {
        maior = jogos[i].nota;
        imaior = i; 
      }
      if (jogos[i].nota < menor) {
        menor = jogos[i].nota;
        imenor = i; 
      }
    }
    
    console.clear();
    console.log(`Maior Nota: ${maior}`);
    console.log(`Menor Nota: ${menor}`);
    menu();
}