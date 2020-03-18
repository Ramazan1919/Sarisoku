using BusınessLayer.Concrete;
using DataEntity;
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
        ReservationManager rezervationManager = new ReservationManager();
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




        public ActionResult SearchCar(Rezervasyon model)
        {

            if (ModelState.IsValid)
            {


                var carlist = carManager.List();
                
                var list = rezervationManager.List(x => x.AlisTarihi <= model.AlisTarihi && x.IadeTarihi >= model.IadeTarihi).Where(
                    x => x.AlisYeri == model.AlisYeri && x.İadeYeri==model.İadeYeri);

                var rezerv=carlist.Where(c => c.Id == model.CarID).ToList();
                var norezerv= carlist.Where(c => c.Id != model.CarID).ToList();

                if (norezerv == null)
                {
                    ViewBag.Nocar = "Belitilen aralıklarda uygun araba bulunamadı.Tekrar Deneyin..";
                    return View("ListOfCars", norezerv);
                }
                else
                {

                    return View("ListOfCars",norezerv);
                }
               
                    
            }
            ViewBag.Nocar = "Belitilen aralıklarda uygun araba bulunamadı.Tekrar Deneyin..";
            return RedirectToAction("ListOfCars", "Home");

        }

    }
}