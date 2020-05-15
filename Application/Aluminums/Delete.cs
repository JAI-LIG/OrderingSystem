using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Aluminums
{
    public class Delete
    {
        public class Command : IRequest
        {
            public string AluminumId { get; set; }
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
                var aluminum = await _context.Aluminums.FindAsync(request.AluminumId);
                
                if(aluminum == null) 
                    throw new Exception("Could note find Aluminum");
                
                _context.Remove(aluminum);

                var success = await _context.SaveChangesAsync() > 0;
                 
                 if(success) return Unit.Value;

                 throw new Exception("Problem saving changes");

                
            }
        }
    }
}