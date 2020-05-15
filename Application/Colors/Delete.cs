using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Colors
{
    public class Delete
    {
        public class Command : IRequest
        {
            public string ColorId { get; set; }
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

               if(color == null)
                    throw new Exception("Could not find Color");

                _context.Remove(color);
                var success = await _context.SaveChangesAsync() > 0 ;

                if(success) return Unit.Value;

                throw new Exception("Problem on saving changes");
                
            }
        }
    }
}