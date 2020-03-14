using BusınessLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RentACar.Controllers
{
    public class HomeController : Controller
    {

        CarManager carManager = new CarManager();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ListOfCars()
        {

            var model = carManager.List();

            return View(model);
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}