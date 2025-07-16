const readline = require("readline");
//console.log('Float [0,1]:', Math.random() * 11)
let cont = 1;
let numero = Math.random() * 16;
numero = Math.floor(numero);

console.log(numero);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.prompt();

console.log("DICA:");
if (numero % 2 == 0) {
  console.log(`O NÚMERO É PAR`);
} else {
  console.log(`O NÚMERO É IMṔAR`);
}

console.log("digite um numero: ");

rl.on("line", (resposta) => {
  console.log("Você digitou:", resposta);
  const numeroImput = parseInt(resposta)
  if (resposta < 0 || resposta > 15) {
    console.log("O número esta fora do intervalo, [0,10]");
  }
  if (resposta > numero) {
    console.log("MAIS BAIXO!!!");
  }

  if (resposta < numero) {
    console.log("MAIS ALTO!!!");
  }

  if (resposta == numero) {
    console.log("Voce acertou!!");
    console.log(`Precisou de ${cont} tentativa(s) para acertar`);
    process.exit(0);
  } else {
    if (cont == 5) {
      console.log("Numero de tentativas excedido");
      process.exit(0);
    }
    console.log("Resposta Errada, Tente Novamente.");
    cont = cont + 1;
  }
});
