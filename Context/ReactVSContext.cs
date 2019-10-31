using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using vsreact.Models;

namespace vsreact.Context
{
    public partial class ReactVSContext:DbContext
    {
        public ReactVSContext()
        {
        }

        public ReactVSContext(DbContextOptions<ReactVSContext> options)
            : base(options)
        {
        }

        // public DbQuery<TierRatingClaimsView> TIERRATING_CLAIMS_VIEW { get; set; }
        public DbSet<Agent> Agents { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {


        }

    }
}
