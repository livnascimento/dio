//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let contaBancaria = {
    cliente: gets(),
    numeroConta: gets(),
    saldoInicial: Number(gets())
};

print(`Nome do cliente: ` + contaBancaria.cliente);
print(`Número da conta: ` + contaBancaria.numeroConta);
print(`Saldo: R$ ` + contaBancaria.saldoInicial.toFixed(2));