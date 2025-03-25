using System.ComponentModel.DataAnnotations;

namespace AnimalTransportAPP.Models
{
    public abstract class Entitet
    {
        [Key]
        public int Sifra { get; set; }
    }
}
