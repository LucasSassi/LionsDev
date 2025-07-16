const readline = require("readline");
let minhaMesa = ["Nicolas", "Otavio", "Luan", "Lucas"];

console.log(
  `Meu nome é ${minhaMesa[3]}, o nome dos meus colegas são: ${minhaMesa[0]}, ${minhaMesa[1]}, ${minhaMesa[2]}.`
);

minhaMesa.push("Pedro");
console.log(minhaMesa);

minhaMesa.shift();
console.log(minhaMesa);

minhaMesa.splice(1, 1);
console.log(minhaMesa);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("0 para remover 'Otavio'\n1 para remover 'Lucas'\n2 para remover 'Pedro'");

rl.question("Escolha um numero: ", (nmr) => {
  console.log("---------------------");
  nmr = parseInt(nmr);
  minhaMesa.splice(nmr, 1);
  console.log(minhaMesa);
});
