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

        // GET: Car/Details/5
        public ActionResult Details(int id)
        {
            var model = carManager.GetById(id);
            return View(model);
        }

        // GET: Car/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Car/Create
        [HttpPost]
        public ActionResult Create(Car model, HttpPostedFileBase ProfileImage)
        {
            if (ModelState.IsValid)
            {
                if (ProfileImage != null &&
                (ProfileImage.ContentType == "image/jpeg" ||
                ProfileImage.ContentType == "image/jpg" ||
                ProfileImage.ContentType == "image/png"))
                {
                    carManager.Insert(model);
                    string filename = $"user_{model.Id}.{ProfileImage.ContentType.Split('/')[1]}";
                    ProfileImage.SaveAs(Server.MapPath($"~/Content/Admin/Content/Photos/Cars/{filename}"));
                    model.ImageUrl = filename;
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
            };
            //ViewBag.CategoryId = new SelectList(Cache_Helper.GetCategoriesFromCache(), "Id", "Title", car.);
            return View(model);

        }

        // POST: Car/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Car model, HttpPostedFileBase ProfileImage)
        {
            if (ModelState.IsValid)
            {
                if (ProfileImage != null &&
                (ProfileImage.ContentType == "image/jpeg" ||
                ProfileImage.ContentType == "image/jpg" ||
                ProfileImage.ContentType == "image/png"))
                {

                    string filename = $"user_{model.Id}.{ProfileImage.ContentType.Split('/')[1]}";
                    ProfileImage.SaveAs(Server.MapPath($"~/Content/Admin/Content/Photos/Cars/{filename}"));
                    model.ImageUrl = filename;

                }


                Car db_car = carManager.Find(x => x.Id == model.Id);


                db_car.IsActive = model.IsActive;
                db_car.GunlukUcret = model.GunlukUcret;
                db_car.KasaTipi = model.KasaTipi;
                db_car.Plaka = model.Plaka;
                db_car.SürücüYas = model.SürücüYas;
                db_car.VitesTipi = model.VitesTipi;
                db_car.YakitTipi = model.YakitTipi;
                db_car.YolcuSayisi = model.YolcuSayisi;
                db_car.Yıl = model.Yıl;
                db_car.ArabaAdi = model.ArabaAdi;
                db_car.BagajLitre = model.BagajLitre;
                db_car.Depozito = model.Depozito;
                db_car.EhliyetYas = model.EhliyetYas;
                db_car.ImageUrl = model.ImageUrl;
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