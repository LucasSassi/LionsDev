const { exit } = require("process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("------CALCULADORA------");
rl.question("ESCOLHA A OPREAÇÃO(+,-,*,/): ", (operation) => {
  rl.question("Primeiro numero: ", (input1) => {
    input1 = parseFloat(input1);
    rl.question("Segundo numero: ", (input2) => {
      input2 = parseFloat(input2);

      if (operation === "+") {
        let igual = input1 + input2;
        console.log("-----------------------");
        console.log(igual);
        process.exit();
      }
      if (operation === "-") {
        let igual = input1 - input2;
        console.log("-----------------------");
        console.log(igual);
        process.exit();
      }
      if (operation === "*") {
        let igual = input1 * input2;
        console.log("-----------------------");
        console.log(igual);
        process.exit();
      }
      if (operation === "/") {
        let igual = input1 / input2;
        console.log("-----------------------");
        console.log(igual);
        process.exit();
      }
    });
  });
});
