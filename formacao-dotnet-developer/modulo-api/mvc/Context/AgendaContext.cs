using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using mvc.Models;


namespace mvc.Context
{
    public class AgendaContext : DbContext
    {
         public AgendaContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Contato> Contatos { get; set; }
    }
}