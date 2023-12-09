using formacao.Models;

var (sucesso, linhas, quantidadeLinhas) = LeituraArquivo.LerArquivo("arquivo.txt");
string mensagem = sucesso ? "deu certo" : "não deu certo";

Console.WriteLine($"A leitura do arquivo {mensagem}! {quantidadeLinhas} foram lidas.");
foreach (string linha in linhas)
{
    Console.WriteLine(linha);
}