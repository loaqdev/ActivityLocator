using System;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityList
{
    public class Querry : IRequest<List<Activity>> { }

    public class Handler(AppDbContext context) : IRequestHandler<Querry, List<Activity>>
    {
        public async Task<List<Activity>> Handle(Querry request, CancellationToken cancellationToken)
        {
            return await context.Activities.ToListAsync(cancellationToken);
        }
    }
}
