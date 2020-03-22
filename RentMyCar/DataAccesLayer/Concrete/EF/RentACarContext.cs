using DataEntity;

using System.Data.Entity;

namespace DataAccessLayer.Concrete.EF
{
    public  class RentACarContext :DbContext
    {
        public DbSet<Admin> Admins { get; set; }

        public DbSet<Car> Cars  { get; set; }

        public DbSet<RentUser> RentUsers { get; set; }

        public DbSet<Rezervasyon> Rezervasyons { get; set; }
        
    }
}
