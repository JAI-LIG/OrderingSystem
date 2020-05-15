using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Colors
{
    public class Details
    {
        public class Query : IRequest<Color>
        {
            public string ColorId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Color>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Color> Handle(Query request, CancellationToken cancellationToken)
            {
                var color = await _context.Colors.FindAsync(request.ColorId);
                return color;
            }
        }
    }
}