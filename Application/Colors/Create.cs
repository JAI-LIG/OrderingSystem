using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Colors
{
    public class Create
    {
        public class Command : IRequest
        {
            public string ColorId { get; set; }
            public string DivisionId { get; set; }
            public string FabricId { get; set; }
            public string ColorName { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var color = new Color 
                {
                    ColorId = request.ColorId,
                    DivisionId = request.DivisionId,
                    FabricId = request.FabricId,
                    ColorName = request.ColorName
                };

                _context.Add(color);
                var success = await _context.SaveChangesAsync() > 0 ;

                if (success) return Unit.Value;

                throw new Exception("Problem saving changes");

            }
        }
    }
}