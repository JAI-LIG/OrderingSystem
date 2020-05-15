using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Aluminums;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AluminumsController : ControllerBase
    {

        private readonly IMediator _mediator;
        public AluminumsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Aluminum>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

    }
}