using propriedades_metodos_construtores.Models;

Pessoa pessoa1 = new(nome: "Lívia", sobrenome: "Nascimento"){};
Pessoa pessoa2 = new(nome: "Lucas", sobrenome: "Sousa"){};

Curso cursoFrontEnd = new()
{
    Nome = "Introdução ao Front-End",
    Alunos = []
};

cursoFrontEnd.AdicionarAluno(pessoa1);
cursoFrontEnd.AdicionarAluno(pessoa2);
cursoFrontEnd.ListarAlunos();
