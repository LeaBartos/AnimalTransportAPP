using AnimalTransportAPP.Models;
using Microsoft.EntityFrameworkCore;

namespace AnimalTransportAPP.Data
{
    public class AnimalTransportContext:DbContext
    {

        public AnimalTransportContext(DbContextOptions<AnimalTransportContext> option): base(option) {
        
        }

        public DbSet<Narucitelj> Narucitelji { get; set; }
    }
}
