using DataEntity;
using System.Collections.Generic;

namespace RentCar.WebSite.Models
{
    public class CarDetailModel
    {
        public Car Car { get; set; }

        public List<LookupItem> VitesTipleri { get; set; }

        public List<LookupItem> YakitTipleri { get; set; }
    }
}