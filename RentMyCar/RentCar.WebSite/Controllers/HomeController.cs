using BusınessLayer.Concrete;
using DataEntity;
using RentCar.WebSite.Models;
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
        KampanyaManager kampanyaManager = new KampanyaManager();
        public ActionResult Index()
        {

            
           ViewBag.model= kampanyaManager.List();
            ViewBag.ModelCount = kampanyaManager.List().Count;
            return View();
        }

        public ActionResult ListOfCars()
        {

            var model = carManager.List();

            return View(model);
        }


        public ActionResult CarList()
        {

            var model = carManager.List();

            return View(model);
        }

        public ActionResult GetKampanya()
        {

            var model = kampanyaManager.List().Where(x=>x.IsActive==true).ToList();

            return View(model);
        }


        public ActionResult KampanyaDetay(int id)
        {
            var model = kampanyaManager.List().FirstOrDefault(i =>i.Id==id);

                return View(model);
        }



        public ActionResult Contact()
        {
           

            return View();
        }
        
        public ActionResult SearchCar(SearchModel model)
        {
            var resultModel = new SearchResultModel()
            {
                SearchModel = model
            };

            if (model!=null)
            {
                if (model.IadeTarihi <= model.AlisTarihi)
                {

                    //  ModelState.AddModelError("Iadetarihi", "ıade tarihi Alış tarihinden küçük olamaz");

                    ViewBag.hata = "Alış Tarihi İade Tarihine Eş veya Büyük Olamaz";

                    return View("_PartialSearchcar");
                }
                else
                {
                    var carlist = carManager.List(x => x.IsActive);

                    if (model.Locations > 0)
                    {
                        carlist = carlist.Where(i => i.Locations == model.Locations).ToList();
                    }
                    if (model.CarID > 0)
                    {
                        carlist = carlist.Where(i => i.Id == model.CarID).ToList();
                    }

                    if (model.VitesTipi > 0)
                    {
                        carlist = carlist.Where(i => i.VitesTipi == model.VitesTipi).ToList();
                    }

                    if (model.YakitTipi > 0)
                    {
                        carlist = carlist.Where(i => i.YakitTipi == model.YakitTipi).ToList();
                    }
                    if (model.KasaTipi > 0)
                    {
                        carlist = carlist.Where(i => i.KasaTipi == model.KasaTipi).ToList();
                    }


                    var reservationList = rezervationManager.List(x => x.Status == ReservationsStatus.Active && ((x.AlisTarihi < model.AlisTarihi && x.IadeTarihi > model.AlisTarihi)
                                            || (x.AlisTarihi > model.AlisTarihi && x.AlisTarihi >= model.IadeTarihi)));


                    resultModel.AvailableCars = carlist.Where(i => !reservationList.Any(r => r.CarID == i.Id)).OrderBy(o => o.GuncelFiyat).ToList();
                    resultModel.ReservedCars = carlist.Where(i => reservationList.Any(r => r.CarID == i.Id)).ToList();
                    resultModel.ActiveReservations = reservationList;
                }
             
              

            }
            return View("ListOfCars", resultModel);
        }
    }
}