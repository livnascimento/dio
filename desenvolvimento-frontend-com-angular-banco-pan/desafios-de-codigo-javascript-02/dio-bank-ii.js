const contaBancaria = {
    nomeCliente: "",
    saldo: 0,
  };
  
  contaBancaria.nomeCliente = gets();
  contaBancaria.saldo = parseFloat(gets());
  
  const numOperacoes = parseInt(gets());
  
  for (let i = 0; i < numOperacoes ; i++) {
    const tipoOperacao = gets();
    const valorOperacao = parseFloat(gets())
  
    if (tipoOperacao.toLowerCase() === "depósito") {
      contaBancaria.saldo += valorOperacao;
    } else if (tipoOperacao.toLowerCase() === "saque") {
      contaBancaria.saldo -= valorOperacao;
    }
  }
  
  print(`Nome do cliente: ${contaBancaria.nomeCliente}`);
  print(`Saldo final: R$ ${contaBancaria.saldo.toFixed(2)}`);