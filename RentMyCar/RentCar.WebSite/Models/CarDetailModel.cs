using DataEntity;
using System.Collections.Generic;

namespace RentCar.WebSite.Models
{
    public class CarDetailModel
    {
        public Car Car { get; set; }

        public List<LookupItem> VitesTipleri { get; set; }

        public List<LookupItem> YakitTipleri { get; set; }

        public List<LookupItem> KasaTipleri { get; set; }

        public List<LookupItem> MarkaTipleri { get; set; }

        public List<LookupItem> LocationTipleri { get; set; }


    }
}