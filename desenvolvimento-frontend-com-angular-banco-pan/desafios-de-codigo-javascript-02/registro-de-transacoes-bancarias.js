const contaBancaria = {
    nomeCliente: "João",
    saldo: 1000.0,
  };
  
  function realizarOperacao() {
    const opcao = parseInt(gets());
  
   switch (opcao) {
      case 1:
        const valorDeposito = parseFloat(gets());
        contaBancaria.saldo += valorDeposito;
        print("Operação de depósito concluída.");
        print(`Saldo atual: R$ ${contaBancaria.saldo.toFixed(2)}`);
        break;
  
      case 2:
        const valorSaque = parseFloat(gets());
        
        if (valorSaque <= contaBancaria.saldo) {
          contaBancaria.saldo -= valorSaque
          print("Operação de saque concluída.");
          print(`Saldo atual: R$ ${contaBancaria.saldo.toFixed(2)}`);
        } else {
          print("Saldo insuficiente. Operação de saque cancelada.");
          print(`Saldo atual: R$ ${contaBancaria.saldo.toFixed(2)}`);
        }
        break;
  
      case 3:
        print(`Saldo atual: R$ ${contaBancaria.saldo.toFixed(2)}`);
        break;
  
      case 4:
        print("Encerrando o programa.");
        return;
  
      default:
        print("Opção inválida.");
    }
  }
  
  realizarOperacao();