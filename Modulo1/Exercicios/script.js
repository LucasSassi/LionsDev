let idadeInput = prompt("PorFavor, digite sua idade: ");

let idade = parseInt(idadeInput);

if (idade >= 18) {
  alert("Voce é maoir de idade! acesso permitido.");
  console.log("O usuario tem " + idade + " anos e é maior de idade.");
} else {
  alert("Voce é menor de idade! acesso negado.");
  console.log("O usuario tem " + idade + " anos e é menor de idade.");
}

console.log("Fim da Verificação");
