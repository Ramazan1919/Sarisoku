using DataEntity;
using BusınessLayer.Util;
using System.Collections.Generic;

namespace RentCar.WebSite.Models
{
    public class SearchResultModel
    {
        public SearchModel SearchModel { get; set; }

        public List<Car> AvailableCars { get; set; }

        public List<Car> ReservedCars { get; set; }

        public List<Rezervasyon> ActiveReservations { get; set; }

        public bool HasRecord
        {
            get
            {
                return AvailableCars.HasElement();
            }
        }
    }
}