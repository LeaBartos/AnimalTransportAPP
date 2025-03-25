using AnimalTransportAPP.Data;
using AnimalTransportAPP.Models;
using Microsoft.AspNetCore.Mvc;

namespace AnimalTransportAPP.Controllers
{

    [ApiController]
    [Route("api/v1/[controller]")]
    public class NaruciteljController : ControllerBase
    {
        private readonly AnimalTransportContext _context;

        public NaruciteljController(AnimalTransportContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_context.Narucitelji);
        }


        [HttpGet]
        [Route("{sifra:int}")]
        public IActionResult GetBySifra(int sifra)
        {
            return Ok(_context.Narucitelji.Find(sifra));
        }

        [HttpPost]
        public IActionResult Post(Narucitelj narucitelj)
        {
            _context.Narucitelji.Add(narucitelj);
            _context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created, narucitelj);
        }

        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, Narucitelj narucitalj)
        {
            var naruciteljIzBaze = _context.Narucitelji.Find(sifra);

            // za sada ručno, kasnije Mapper
            naruciteljIzBaze.Vrsta = narucitalj.Vrsta;
            naruciteljIzBaze.Ime = narucitalj.Ime;
            naruciteljIzBaze.Prezime = narucitalj.Prezime;
            naruciteljIzBaze.Adresa = narucitalj.Adresa;
            naruciteljIzBaze.Email = narucitalj.Email;
            naruciteljIzBaze.Telefon = narucitalj.Telefon;

            _context.Narucitelji.Update(naruciteljIzBaze);
            _context.SaveChanges();

            return Ok(new { poruka = "Uspješno promjenjeno" });
        }

        [HttpDelete]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Delete(int sifra)
        {
            var naruciteljIzBaze = _context.Narucitelji.Find(sifra);
            _context.Narucitelji.Remove(naruciteljIzBaze);
            _context.SaveChanges();
            return Ok(new { poruka = "Uspješno obrisano" });
        }
    }
}
