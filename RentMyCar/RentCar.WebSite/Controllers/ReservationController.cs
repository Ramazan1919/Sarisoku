using BusınessLayer.Concrete;
using System.Web.Mvc;

namespace RentCar.WebSite.Controllers
{
    public class ReservationController : Controller
    {
        private readonly ReservationManager _reservationManager;

        public ReservationController()
        {
            _reservationManager = new ReservationManager();
        }

        public ActionResult Index()
        {
            var searchResult = _reservationManager.GetReservationList();
            return View(searchResult);
        }

        public ActionResult Detail(int id)
        {
            var model = _reservationManager.GetReservationDetail(id);
            return View(model);
        }
    }
}