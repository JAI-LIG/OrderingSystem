using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Aluminums
{
    public class Details
    {
        public class Query : IRequest<Aluminum>
        {
            public string AluminumId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Aluminum>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Aluminum> Handle(Query request, CancellationToken cancellationToken)
            {
               var aluminum = await _context.Aluminums.FindAsync(request.AluminumId);
               return aluminum;
            }
        }
    }
}