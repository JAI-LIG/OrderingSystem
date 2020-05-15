using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Colors;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ColorsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ColorsController(IMediator mediator)
        {
            _mediator = mediator;

        }
        // GET api/values
        [HttpGet]
        public async Task<ActionResult<List<Color>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

    }
}