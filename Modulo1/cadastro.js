const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let funcionarios = [];

function menu() {
  console.log(
    "\n ==========MENU==========\n1 p/ Cadastrar funcionario\n2 p/ Exibir o funcionario\n3 p/ Deletar o funcionario\n4 p/ Editar o funcionario\n5 p/ Maior/Menor salario\n6 p/ Sair\n========================="
  );
  rl.question("Opção: ", (menus) => {
    switch (menus) {
      case "1":
        console.clear();
        cadastrar();
        break;

      case "2":
        let lido = funcionarios.length;
        if (lido == 0) {
          console.clear();
          console.log("\nNenhum usuario cadastrado.");
        } else {
          console.clear();  
          console.log("============LISTA DE FUNCIONARIOS============\n", funcionarios,'\n=============================================');
        }
        menu();
        break;

      case "3":
        console.clear();
        let lido1 = funcionarios.length;
        if (lido1 == 0) {
          console.log("\nNenhum funcionario cadastrado.\n");
          menu()
        } else {
          console.log(funcionarios)  
          rl.question(
            `Qual você quer deletar? (1 p/ o primeiro, 2 p/ o segundo 3...): \n`,
            (deletar) => {
              funcionarios.splice(deletar - 1, 1);
              let lido = funcionarios.length;
              if (deletar > lido) {
                console.log("\nDigite um número valido.");
              }
              menu();
            }
          );
        }
        break;
      case "4":
        console.clear();
        console.log(funcionarios)
        editar()
        break;
      case "5":
        console.clear();
        maiorsalario();
        menu();
        break;
      case "6":
        console.clear();
        process.exit();
      default:
        console.log("Digite uma opção valida.\n");
        menu();
    }
  });
}
menu();

function cadastrar() {
  rl.question("Digite o nome do funcionario: ", (nome) => {
    rl.question("Digite o salario: ", (salario) => {
      rl.question("Digite o cargo: ", (cargo) => {
        funcionarios.push({
          nome,
          salario: parseFloat(salario),
          cargo,
        });
        console.clear();
        console.log("\nFuncionario cadastrado.\n");
        menu();
      });
    });
  });
}
function maiorsalario() {
  let lido3 = funcionarios.length;
  let maior = -999999;
  let menor = 9999999;
  for (let i = 0; i < lido3; i++) {
    if (funcionarios[i].salario < menor) {
      menor = funcionarios[i].salario;
    }
    if (funcionarios[i].salario > maior) {
      maior = funcionarios[i].salario;
    }
  }
  console.log(`Maior salario: ${maior}`);
  console.log(`Menor salario: ${menor}`);
}

function editar() {
  rl.question("Qual deseja editar?(1 p/ o primeiro, 2 p/ o segundo 3...): ", (editor) => {
    let editor1 = parseInt(editor);
    rl.question("Digite o nome do funcionario: ", (nome) => {
      rl.question("Digite o salario: ", (salario) => {
        rl.question("Digite o cargo: ", (cargo) => {
          funcionarios[editor1 - 1] = {
            nome,
            salario: parseFloat(salario),
            cargo,
          };
          console.log("Funcionario editado.\n");
          menu();
        });
      });
    });
  });
}
