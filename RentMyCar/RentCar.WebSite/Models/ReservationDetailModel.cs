using DataEntity;
using System.Collections.Generic;

namespace RentCar.WebSite.Models
{
    public class ReservationDetailModel
    {
        public Rezervasyon Reservation { get; set; }

        public List<LookupItem> CarList { get; set; }

        public List<LookupItem> Locations { get; set; }

        public List<LookupItem> ReservationStatuses { get; set; }
    }
}