using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace propriedades_metodos_construtores.Models
{
    public class Pessoa
    {
        public Pessoa()
        {

        }
        public Pessoa(string nome, string sobrenome)
        {
            Nome = nome;
            Sobrenome = sobrenome;
        }
        private string nome;
        private string sobrenome;
        private int idade;
        public string Nome 
        { 

            get => nome;

            set 
            {
                if (value == "") 
                {
                    throw new ArgumentException("O argumento não pode ser vazio");
                }
                nome = value;
            } 
        }
        public int Idade 
        { 
            get => idade;

            set
            {
                if (value < 0) 
                {
                    throw new ArgumentException("A idade não pode ser negativa");
                }
                idade = value;
            } 
        }
        public string Sobrenome 
        { 
            get => sobrenome;
            set
            {
                if (value == "") {
                    throw new ArgumentException("Sobrenome inválido.");
                }
                sobrenome = value;
            } 
        }
        public string NomeCompleto => $"{Nome} {Sobrenome}";
        public void Apresentar()
        {
            Console.WriteLine($"Olá, meu nome é {Nome}. Tenho {Idade} anos.");
        }
    }
}