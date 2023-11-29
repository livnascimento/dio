using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace propriedades_metodos_construtores.Models
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
            foreach (Pessoa aluno in Alunos)
            {
                Console.WriteLine(aluno.NomeCompleto);
            } 
        }
    }
}