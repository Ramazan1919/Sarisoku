using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Concrete.EF
{
    public class RepositoryBase
    {

        protected static RentACarContext context;
        private static object _lockSync = new object();

        public RepositoryBase()
        {

            context = CreateContext();
        }

        protected static RentACarContext CreateContext()
        {

            if (context == null)
            {
                lock (_lockSync)
                {
                    if (context == null)
                    {

                        context = new RentACarContext();
                    }

                }


            }

            return context;
        }
    }
}
