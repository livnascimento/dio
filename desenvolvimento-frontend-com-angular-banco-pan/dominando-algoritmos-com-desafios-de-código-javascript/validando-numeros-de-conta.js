//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.


const numeroConta = gets();

if (/^\d{6}$/.test(numeroConta)) {
  const numArray = numeroConta.split('').map(Number);

  const sum = numArray.reduce((a, b) => a + b, 0);

  if (numArray[0] > 0 && sum <= 30) {
    print('Numero de conta valido.');
  } else {
    if (numArray[0] <= 0) {
      print('Numero de conta invalido: O primeiro digito deve ser maior que zero.');
    } else {
      print('Numero de conta invalido: A soma dos digitos e maior que 30.');
    }
  }
}