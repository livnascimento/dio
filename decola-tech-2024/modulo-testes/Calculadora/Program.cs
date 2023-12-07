using System;
using Calculadora.Services;

CalculadoraImplementacao calculadora = new CalculadoraImplementacao(){};

int soma = calculadora.Somar(5, 10);
Console.WriteLine(soma);