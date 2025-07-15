using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class AppDbContext(DbContextOptions options) : DbContext(options) // because those options used in API.Program.cs to configure connection string for database
{
    public required DbSet<Activity> Activities { get; set; }
}
