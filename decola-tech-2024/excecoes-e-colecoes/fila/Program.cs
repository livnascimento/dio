var nomes = new Queue<string>();

nomes.Enqueue("Lívia");
nomes.Enqueue("Lucas");
nomes.Enqueue("Ana");

nomes.Dequeue();

foreach (string nome in nomes)
{
    Console.WriteLine(nome);
}