using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Calculadora.Services
{
    public class CalculadoraImplementacao
    {
        public int Somar(int numero1, int numero2) 
        {
            return numero1 + numero2;
        }

        public int Subtrair(int numero1, int numero2) 
        {
            return numero1 - numero2;
        }

        public int Multiplicar(int numero1, int numero2)
        {
            return numero1 * numero2;
        }
        public double Dividir (int numero1, int numero2)
        {
            return numero1/numero2;
        }
    }
}