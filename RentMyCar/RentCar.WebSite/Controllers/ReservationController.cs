using BusınessLayer.Concrete;
using DataEntity;
using RentCar.WebSite.Models;
using System.Linq;
using System.Web.Mvc;

namespace RentCar.WebSite.Controllers
{
    public class ReservationController : Controller
    {
        private readonly ReservationManager _reservationManager;
        private readonly CarManager _carManager;

        public ReservationController()
        {
            _reservationManager = new ReservationManager();
            _carManager = new CarManager();
        }

        public ActionResult Index()
        {
            var searchResult = _reservationManager.GetReservationList();
            return View(searchResult);
        }

        public ActionResult Detail(int id)
        {
            var reservation = _reservationManager.GetReservationDetail(id);
            return GetModel(reservation);
        }

        [HttpPost]
        public ActionResult Detail(Rezervasyon reservation)
        {
            if (ModelState.IsValid)
            {
                if (reservation.Id > 0)
                {
                    _reservationManager.Update(reservation);
                }
                else
                {
                    reservation.AdminID = 1; //şimdilik default 1 atıldı
                    _reservationManager.Insert(reservation);
                }
            }
            return GetModel(reservation);
        }

        private ActionResult GetModel(Rezervasyon reservation)
        {
            var carlist = _carManager.List(i => i.IsActive)
               .Select(i => new LookupItem() { ID = i.Id, Name = i.ArabaAdi }).OrderBy(o => o.Name).ToList();

            var model = new ReservationDetailModel()
            {
                Reservation = reservation,
                CarList = carlist,
                Locations = LookupManager.GetLookups(LookupType.Locations),
                ReservationStatuses = LookupManager.GetLookups(LookupType.ReservationStatus),
            };
            return View(model);
        }
    }
}