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
                var carlist = carManager.List(x=>x.IsActive && x.Locations==model.Locations);

                if(model.CarID > 0)
                {
                    carlist = carlist.Where(i=>i.Id == model.CarID).ToList();
                }

                if (model.VitesTipi > 0)
                {
                    carlist = carlist.Where(i => i.VitesTipi == model.VitesTipi).ToList();
                }

                if (model.YakitTipi > 0)
                {
                    carlist = carlist.Where(i => i.YakitTipi == model.YakitTipi).ToList();
                }
                
                var reservationList = rezervationManager.List(x => x.Status == ReservationsStatus.Active && ((x.AlisTarihi < model.AlisTarihi && x.IadeTarihi > model.AlisTarihi)
                                        || (x.AlisTarihi > model.AlisTarihi && x.AlisTarihi >= model.IadeTarihi)));


                resultModel.AvailableCars = carlist.Where(i=> !reservationList.Any(r=>r.CarID==i.Id)).ToList();
                resultModel.ReservedCars = carlist.Where(i => reservationList.Any(r => r.CarID == i.Id)).ToList();
                resultModel.ActiveReservations = reservationList;

                

            }

            return View("ListOfCars", resultModel);
        }
    }
}