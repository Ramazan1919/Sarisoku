using BusınessLayer.Concrete;
using DataEntity;
using RentCar.WebSite.Filter;
using RentCar.WebSite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Mvc;

namespace RentCar.WebSite.Controllers
{
    [Auth]
    public class ReservationController : Controller
    {
        private readonly ReservationManager _reservationManager;
        private readonly CarManager _carManager;
        private readonly RentUserManager _rentUserManager;
   

        public ReservationController()
        {
            _reservationManager = new ReservationManager();
            _carManager = new CarManager();
            _rentUserManager = new RentUserManager();
        }

        public ActionResult Index(int rentUserId=0)
        {
            var searchResult = _reservationManager.GetReservationList(rentUserId);
            return View(searchResult);
        }

        public ActionResult Control()
        {
            var date = DateTime.Now;

            var searchResult = _reservationManager.GetReservationList(0).Where(i => i.IadeTarihi == date || date>= i.IadeTarihi).ToList();

            if (searchResult != null)
            {

                foreach(var item in searchResult)
                {

                    item.Status =0;
                }
            }


            return RedirectToAction("Index","Reservation");

        }



        public ActionResult Detail(int id)
        {
            var reservation = _reservationManager.GetReservationDetail(id);
            return GetModel(reservation);
        }

        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            else
            {
                var model = _reservationManager.Find(i => i.Id == id);
                if (model == null)
                {
                    return HttpNotFound();
                }

                return View(model);
            }
        }

        [HttpPost]
        public ActionResult Delete(int id)
        {
            var rezervasyon = _reservationManager.Find(i => i.Id == id);
            _reservationManager.Delete(rezervasyon);
            return RedirectToAction("Index", "Reservation");
        }

        [HttpPost]
        public ActionResult Detail(Rezervasyon reservation)
        {
            var message = "İşleminize devam edemiyoruz. Lütfen giriş yaptığınız değerleri kontrol edip tekrar deneyiniz!";
            var success = false;
           
            if (ModelState.IsValid)
            {
                //Kiralayan bilgisi yeni ise ekle
                if (reservation.RentUserID == 0)
                {
                    var rentUser = _rentUserManager.List(i => i.Name == reservation.RentUser.Name && i.PhoneNumber == reservation.RentUser.PhoneNumber).FirstOrDefault();
                    if (rentUser == null)
                    {
                        _rentUserManager.Insert(reservation.RentUser);
                        rentUser = reservation.RentUser;
                    }
                    reservation.RentUserID = rentUser.Id;
                }
                else
                {
                    reservation.RentUser = _rentUserManager.GetById(reservation.RentUserID);
                }

                if (reservation.AdminID <= 0)
                {
                    reservation.AdminID = 1; //şimdilik default 1 atıldı 
                }

                if (reservation.Id > 0)
                {
                    var persistent = _reservationManager.GetById(reservation.Id);
                    if (persistent != null)
                    {
                        persistent.İadeYeri = reservation.İadeYeri;
                        persistent.AlisYeri = reservation.AlisYeri;
                        persistent.IadeTarihi = reservation.IadeTarihi;
                        persistent.AlisTarihi = reservation.AlisTarihi;
                        persistent.CarID = reservation.CarID;
                        persistent.RentUserID = reservation.RentUserID;
                        persistent.Status = reservation.Status;
                        persistent.AdminID = reservation.AdminID;

                        _reservationManager.Update(persistent);
                        message = "Rezervasyon başarıyla güncellendi.";
                        success = true;
                    }
                    else
                    {
                        message = "Rezervasyon bilgileri kaydedilemedi!";
                    }
                }
                else
                {
                    _reservationManager.Insert(reservation);
                    message = "Yeni rezervasyon kaydı başarıyla eklendi.";
                    success = true;
                }
            }

            ViewBag.ReservationResult = success;
            ViewBag.ReservationMessage = message;
            return GetModel(reservation);
        }

        private ActionResult GetModel(Rezervasyon reservation)
        {
            var carlist = _carManager.List(i => i.IsActive)
              .Select(i => new LookupItem() { ID = i.Id, Name = string.Format("{0} - {1}", i.ArabaAdi, i.Locations) }).OrderBy(o => o.Name).ToList();

            var rentUserList = new List<LookupItem>() { new LookupItem() { ID = 0, Name = "Yeni Kiralayan", Order = 0 } };
            rentUserList.AddRange(_rentUserManager.List().Select(i => new LookupItem() { ID = i.Id, Name = string.Format("{0} - {1}", i.Name, i.PhoneNumber) }).OrderBy(o => o.Name).ToList());

            var model = new ReservationDetailModel()
            {
                Reservation = reservation,
                CarList = carlist,
                RentUserList = rentUserList,
                Locations = LookupManager.GetLookups(LookupType.Locations),
                ReservationStatuses = LookupManager.GetLookups(LookupType.ReservationStatus),
            };
            return View(model);
        }
    }
}