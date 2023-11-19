//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorDinheiro = parseFloat(gets());
const moedaOrigem = gets();
const moedaDestino = gets();

if (!isNaN(valorDinheiro)) {

    const taxaCambioBRLtoUSD = 0.1875;
    const taxaCambioBRLtoEUR = 0.1520;
    const taxaCambioUSDtoBRL = 5.3333;
    const taxaCambioEURtoBRL = 6.5789;

    let valorConvertido;

    if (moedaOrigem === 'BRL' && moedaDestino === 'USD') {
        valorConvertido = valorDinheiro * taxaCambioBRLtoUSD;
    } else if (moedaOrigem === 'BRL' && moedaDestino === 'EUR') {
        valorConvertido = valorDinheiro * taxaCambioBRLtoEUR;
    } else if (moedaOrigem === 'USD' && moedaDestino === 'BRL') {
        valorConvertido = valorDinheiro * taxaCambioUSDtoBRL;
    } else if (moedaOrigem === 'EUR' && moedaDestino === 'BRL') {
        valorConvertido = valorDinheiro * taxaCambioEURtoBRL;
    }

    print(`${valorDinheiro} ${moedaOrigem} equivalem a ${valorConvertido.toFixed(2)} ${moedaDestino}.`);
}