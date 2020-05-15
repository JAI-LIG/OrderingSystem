using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Aluminum> Aluminums { get; set; }
        public DbSet<Color> Colors { get; set; }
    }
}