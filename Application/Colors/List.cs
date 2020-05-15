using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Colors
{
    public class List
    {
        public class Query : IRequest<List<Color>> { }

        public class Handler : IRequestHandler<Query, List<Color>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Color>> Handle(Query request, CancellationToken cancellationToken)
            {
               var colors = await _context.Colors.ToListAsync();
               return colors;
            }
        }
    }
}