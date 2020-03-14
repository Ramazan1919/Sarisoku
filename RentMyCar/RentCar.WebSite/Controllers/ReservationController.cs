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

        //List all reservations
        public ActionResult Index()
        {
            var searchResult = _reservationManager.List();
            return View(searchResult);
        }
    }
}