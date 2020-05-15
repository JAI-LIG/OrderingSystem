using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Aluminums
{
    public class List
    {
        public class Query : IRequest<List<Aluminum>> { }

        public class Handler : IRequestHandler<Query, List<Aluminum>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Aluminum>> Handle(Query request, CancellationToken cancellationToken)
            {
                var aluminums = await _context.Aluminums.ToListAsync();
                return aluminums;
            }
        }
    }
}