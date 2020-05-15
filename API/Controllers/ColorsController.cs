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

        [HttpGet("{id}")]
        public async Task<ActionResult<Color>> Details(string id)
        {
            return await _mediator.Send(new Details.Query{ColorId = id});
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(string id, Edit.Command command)
        {
            command.ColorId = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(string id)
        {
            return await _mediator.Send(new Delete.Command{ColorId = id});
        }

    }
}