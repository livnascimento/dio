using excecoes_e_colecoes.Models;
using System.Globalization;

try
{
	string[] lines = File.ReadAllLines("Files/alunos.txt");

	foreach (string line in lines)
	{
		Console.WriteLine(line);    
	}	
}
catch (FileNotFoundException ex)
{
	Console.WriteLine($"O seguinte erro ocorreu: {ex.Message}");
}
catch (Exception ex)
{
	Console.WriteLine($"O seguinte erro ocorreu: {ex.Message}");
}
