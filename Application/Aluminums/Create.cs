using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Aluminums
{
    public class Create
    {
        public class Command : IRequest
        {
            public string AluminumId { get; set; }
            public string AluminumName { get; set; }
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
                var aluminum = new Aluminum
                {
                    AluminumId = request.AluminumId,
                    AluminumName = request.AluminumName
                };

                _context.Aluminums.Add(aluminum);
               var success =  await _context.SaveChangesAsync() > 0 ;

               if(success) return Unit.Value;

               throw new Exception("Problem saving changes");
            }
        }
    }
}