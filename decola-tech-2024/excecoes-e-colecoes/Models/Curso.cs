using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace execoes_e_colecoes.Models
{
    public class Curso
    {
        public string Nome { get; set; }
        public List<Pessoa> Alunos { get; set; }
        public void AdicionarAluno(Pessoa aluno) 
        {
            Alunos.Add(aluno);
        }
        public int ObterQuantidadeAlunosMatriculados() 
        {
            int quantidade = Alunos.Count;
            Console.WriteLine(quantidade);
            return quantidade;
        }
        public void RemoverAluno(Pessoa aluno) 
        {
            Alunos.Remove(aluno);
        }
        public void ListarAlunos() 
        {
            for (int i = 0; i < Alunos.Count ; i++) {
                Console.WriteLine($"{i + 1} - {Alunos[i].NomeCompleto}");
            } 
        }
    }
}