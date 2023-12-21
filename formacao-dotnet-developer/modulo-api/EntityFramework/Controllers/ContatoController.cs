using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EntityFramework.Context;
using EntityFramework.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EntityFramework.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContatoController : ControllerBase
    {
        private readonly AgendaContext _context;

        public ContatoController(AgendaContext context)
        {
            _context = context;
        }

        [HttpPost]
        [ProducesResponseType(typeof(Contato), 200)]
        [ProducesResponseType(400)]
        public IActionResult Create(Contato contato)
        {
            _context.Add(contato);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new {id = contato.Id}, contato);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Contato), 200)]
        [ProducesResponseType(404)]
        public IActionResult GetById(int id)
        {
            var contato = _context.Contatos.Find(id);
            if (contato == null)
                return NotFound();

            return Ok(contato);
        }

        [HttpGet("nome={nome}")]
        [ProducesResponseType(typeof(Contato), 200)]
        [ProducesResponseType(404)]
        public IActionResult GetByName(string nome)
        {
            var contatos = _context.Contatos.Where(x => x.Nome.Contains(nome));
            if (contatos == null)
                return NotFound();

            return Ok(contatos);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(typeof(Contato), 200)]
        [ProducesResponseType(404)]
        public IActionResult Udpate(int id, Contato contato)
        {
            var contatoBanco = _context.Contatos.Find(id);
            if (contatoBanco == null)
                return NotFound();

            contatoBanco.Nome = contato.Nome;
            contatoBanco.Telefone = contato.Telefone;
            contatoBanco.Ativo = contato.Ativo;

            _context.Contatos.Update(contatoBanco);
            _context.SaveChanges();

            return Ok(contatoBanco);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult Delete(int id)
        {
            var contatoBanco = _context.Contatos.Find(id);

            if (contatoBanco == null)
                return NotFound();

            _context.Contatos.Remove(contatoBanco);
            _context.SaveChanges();

            return NoContent();
        }
    }
}