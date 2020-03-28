using BusınessLayer.Concrete;
using DataEntity;
using RentCar.WebSite.Filter;
using RentCar.WebSite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace RentCar.WebSite.Controllers
{
    [Auth]
    public class CarController : Controller
    {
        ReservationManager reservationManager = new ReservationManager();
        CarManager carManager = new CarManager();
        // GET: Car
        public ActionResult Index()
        {

            var model = carManager.List();
            return View(model);
        }

     

        // GET: Car/Create
        public ActionResult Create()
        {
            var model = new CarDetailModel()
            {
                 Car=new Car(),
                YakitTipleri = LookupManager.GetLookups(LookupType.YakitTipi),
                VitesTipleri = LookupManager.GetLookups(LookupType.VitesTipi),
                MarkaTipleri = LookupManager.GetLookups(LookupType.Marka),
                KasaTipleri=LookupManager.GetLookups(LookupType.KasaTipi),
                LocationTipleri= LookupManager.GetLookups(LookupType.Locations),

            };
            return View(model);
        }

        // POST: Car/Create
        [HttpPost]
        public ActionResult Create(CarDetailModel model, HttpPostedFileBase ProfileImage)
        {
            if (ModelState.IsValid)
            {
                if (ProfileImage != null &&
                (ProfileImage.ContentType == "image/jpeg" ||
                ProfileImage.ContentType == "image/jpg" ||
                ProfileImage.ContentType == "image/png"))
                {
                    carManager.Insert(model.Car);
                    string filename = $"user_{model.Car.Id}.{ProfileImage.ContentType.Split('/')[1]}";
                    ProfileImage.SaveAs(Server.MapPath($"~/Content/Admin/Content/Photos/Cars/{filename}"));
                    model.Car.ImageUrl = filename;
                    carManager.Save();
                }
                return RedirectToAction("Index", "Car");
            }
            else
            {
                return View(model);
            }
        }

        // GET: Car/Edit/5
        public ActionResult Edit(int? id)
        {

            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Car car = carManager.Find(x => x.Id == id.Value);
            if (car == null)
            {
                return HttpNotFound();
            }

            var model = new CarDetailModel()
            {
                 Car = car,
                 YakitTipleri = LookupManager.GetLookups(LookupType.YakitTipi), 
                 VitesTipleri = LookupManager.GetLookups(LookupType.VitesTipi),
                 MarkaTipleri= LookupManager.GetLookups(LookupType.Marka),
                 KasaTipleri= LookupManager.GetLookups(LookupType.KasaTipi),
                 LocationTipleri= LookupManager.GetLookups(LookupType.Locations),
            };
          
            return View(model);

        }

        // POST: Car/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(CarDetailModel model, HttpPostedFileBase ProfileImage)
        {
            if (ModelState.IsValid)
            {
                if (ProfileImage != null &&
                (ProfileImage.ContentType == "image/jpeg" ||
                ProfileImage.ContentType == "image/jpg" ||
                ProfileImage.ContentType == "image/png"))
                {

                    string filename = $"user_{model.Car.Id}.{ProfileImage.ContentType.Split('/')[1]}";
                    ProfileImage.SaveAs(Server.MapPath($"~/Content/Admin/Content/Photos/Cars/{filename}"));
                    model.Car.ImageUrl = filename;

                }


                Car db_car = carManager.Find(x => x.Id == model.Car.Id);


                db_car.IsActive = model.Car.IsActive;
                db_car.GunlukUcret = model.Car.GunlukUcret;
                db_car.KasaTipi = model.Car.KasaTipi;
                db_car.IndirimOrani = model.Car.IndirimOrani;
                db_car.SürücüYas = model.Car.SürücüYas;
                db_car.VitesTipi = model.Car.VitesTipi;
                db_car.YakitTipi = model.Car.YakitTipi;
                db_car.Marka = model.Car.Marka;
                db_car.Locations = model.Car.Locations;
                db_car.Yıl = model.Car.Yıl;
                db_car.ArabaAdi = model.Car.ArabaAdi;
                db_car.Depozito = model.Car.Depozito;
                db_car.EhliyetYas = model.Car.EhliyetYas;
                db_car.ImageUrl = model.Car.ImageUrl;
                carManager.Update(db_car);

                return RedirectToAction("Index", "Car");



            }

            return View(model);
        }

        // GET: Car/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            Car car = carManager.Find(x => x.Id == id.Value);


            if (car == null)
            {

                return HttpNotFound();
            }
            return View(car);
        }

        // POST: Car/Delete/5
        [HttpPost]
        public ActionResult Delete(int id)
        {
            Car car = carManager.Find(x => x.Id == id);

            if (car.IsActive == false)
            {
                reservationManager.Delete(reservationManager.Find(x => x.CarID == id));
                reservationManager.Save();
            }
            carManager.Delete(car);

            carManager.Save();

            return RedirectToAction("Index", "Car");
        }
    }
}