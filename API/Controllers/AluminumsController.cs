using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AluminumsController : ControllerBase
    {
        private readonly DataContext _context;
        public AluminumsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Aluminum>>> Get()
        {
            var aluminum = await _context.Aluminums.ToListAsync();
            return Ok(aluminum);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Aluminum>> Get(int id)
        {
            var aluminum = await _context.Aluminums.FindAsync(id);
            return Ok(aluminum);
        }
    }
}