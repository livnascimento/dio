const cliente1 = {
    nome: gets(),
    conta: gets(),
    saldo: Number(gets())
};

const cliente2 = {
    nome: gets(),
    conta: gets(),
    saldo: Number(gets())
};

if ((cliente1.nome === cliente2.nome) && (cliente1.conta === cliente2.conta) && (cliente1.saldo === cliente2.saldo)) {
    print("As contas bancárias são iguais.");
} else {
    print("As contas bancárias são diferentes.")
}
