using Calculadora.Services;

namespace CalculadoraTests;

public class CalculadoraTests
{
    private CalculadoraImplementacao calc;

    public CalculadoraTests()
    {
        calc = new CalculadoraImplementacao(){};
    }

    [Fact]
    public void Somar5e10Retornar15()
    {
        int numero1 = 5, numero2 = 10;
        int resultado = calc.Somar(numero1, numero2);

        Assert.Equal(15, resultado);
    }
}