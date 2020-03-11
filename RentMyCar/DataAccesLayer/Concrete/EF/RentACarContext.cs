using DataEntity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Concrete.EF
{
   public  class RentACarContext :DbContext
    {
        public DbSet<Cars> Cars  { get; set; }

        public DbSet<Admin> Admins { get; set; }

        public DbSet<Rezervasyon> Rezervasyons { get; set; }




    }
}
