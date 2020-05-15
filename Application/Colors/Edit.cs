using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Colors
{
    public class Edit
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
                var color = await _context.Colors.FindAsync(request.ColorId);

                if (color == null)
                    throw new Exception("Could not find Color");
                
                color.DivisionId = request.DivisionId ?? color.DivisionId;
                color.FabricId = request.FabricId ?? color.FabricId;
                color.ColorName = request.ColorName ?? color.ColorName;

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Unit.Value;

                throw new Exception("Problem on saving changes");

            }
        }
    }
}