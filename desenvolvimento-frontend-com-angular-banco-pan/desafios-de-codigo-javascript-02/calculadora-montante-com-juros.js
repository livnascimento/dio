//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const contaBancaria = {
    investimentoInicial: parseFloat(gets()),
    taxaJurosMensal: parseFloat(gets()),
    periodoMeses: parseInt(gets()),
};

const taxaJuros = contaBancaria.taxaJurosMensal / 100;
const montante = contaBancaria.investimentoInicial * (1 + taxaJuros) ** contaBancaria.periodoMeses;

print("Investimento: " + contaBancaria.investimentoInicial.toFixed(2));
print("Juros: " + contaBancaria.taxaJurosMensal);
print("Período: " + contaBancaria.periodoMeses);
print("Resultado: " + montante.toFixed(2));