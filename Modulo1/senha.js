const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const arrayw = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ];

  rl.question('Digite o tamanho da senha que você deseja: ', (comprimentoSenha) =>{
    comprimentoSenha = parseInt(comprimentoSenha)

    let stringw = ''

    for(let i = 0; i < comprimentoSenha; i++){
        let numero = Math.random() * 63;
        numero = Math.floor(numero);
        stringw = stringw + arrayw[numero]
    }
    console.clear()
    console.log('A senha é: ' + stringw)
    process.exit()
  })