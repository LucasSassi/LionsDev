const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function jogarNovamente(){
console.log('---Pedra, Papel, ou Tesoura---')

let numero = Math.random() * 3;
numero = Math.floor(numero);

var array = ['pedra', 'papel', 'tesoura']

let escolhaComputador = array[numero]

rl.question('Escolha sua jogada!!\n--Pedra\n--Papel\n--Tesoura\n--Sair\nRESPOSTA: ', (escolhaUsuario) => {
  let escolhaUsuario2 = escolhaUsuario.toLowerCase().trim()

  if (escolhaUsuario2 == 'sair'){
    console.log('--------Fim do Processo--------')
    process.exit()
  }

  if (escolhaComputador == escolhaUsuario2){
    console.log('------------------------------')
    console.log('Empate.')
    console.log('------------------------------\n')
    jogarNovamente()
  }else if (escolhaComputador == 'papel' && escolhaUsuario2 == 'pedra' || 
            escolhaComputador == 'tesoura' && escolhaUsuario2 == 'papel' || 
            escolhaComputador == 'pedra' && escolhaUsuario2 == 'tesoura'){
    console.log('------------------------------')
    console.log('Você perdeu!')
    console.log('------------------------------\n')
    jogarNovamente()
  }else if (escolhaUsuario2 == 'papel' && escolhaComputador == 'pedra' || 
            escolhaUsuario2 == 'tesoura' && escolhaComputador == 'papel' || 
            escolhaUsuario2 == 'pedra' && escolhaComputador == 'tesoura'){
    console.log('------------------------------')
    console.log('Você ganhou!')
    console.log('------------------------------\n')
    process.exit()
  }else {
    console.log('------------------------------')
    console.log('Escolha uma escolha valida.')
    console.log('------------------------------\n')
    jogarNovamente()
  }
})
}
jogarNovamente()