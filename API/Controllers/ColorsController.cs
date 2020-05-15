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
    public class ColorsController : ControllerBase
    {
       private readonly DataContext _context;

        public ColorsController(DataContext context)
        {
            _context = context;


        }
        // GET api/values
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Color>>> Get()
        {
            var colors = await _context.Colors.ToListAsync();
            return Ok(colors);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult<string>> Get(int id)
        {
            var value = await _context.Colors.FindAsync(id);
            return Ok(value);
        }  
    }
}