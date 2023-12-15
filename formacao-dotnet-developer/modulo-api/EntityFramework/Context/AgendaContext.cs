using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EntityFramework.Entities;
using Microsoft.EntityFrameworkCore;

namespace EntityFramework.Context
{
    public class AgendaContext : DbContext
    {
        public AgendaContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Contato> Contatos { get; set; }
    }
}