using BusınessLayer.Concrete;
using DataEntity;
using RentCar.WebSite.Filter;
using RentCar.WebSite.Models;
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

        public ActionResult Delete(int ? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            else
            {
                var model = _reservationManager.Find(i=>i.Id==id);
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
            Rezervasyon rezervasyon = _reservationManager.Find(i => i.Id == id);

            _reservationManager.Delete(rezervasyon);
            _reservationManager.Save();

            return RedirectToAction("Index", "Reservation");

        }


        [HttpPost]
        public ActionResult Detail(Rezervasyon reservation)
        {
            var message = "İşlem başarısız. Lütfen daha sonra tekrar deneyiniz!";
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

                if (reservation.Id > 0)
                {
                    _reservationManager.Update(reservation);
                    message = "Rezervasyon başarıyla güncellendi.";
                }
                else
                {
                    reservation.AdminID = 1; //şimdilik default 1 atıldı
                    _reservationManager.Insert(reservation);
                    message = "Yeni rezervasyon kaydı başarıyla eklendi.";
                }
                success = true;
            }

            ViewBag.ReservationResult = success;
            ViewBag.ReservationMessage = message;
            return GetModel(reservation);
        }

        private ActionResult GetModel(Rezervasyon reservation)
        {
            var list=new List<LookupItem>() { new LookupItem() { ID = 0, Name = "Arabaları Seçiniz", Order = 0 } };
            var carlist = _carManager.List(i => i.IsActive).Select(i => new LookupItem() { ID = i.Id, Name = i.ArabaAdi }).ToList();
            list.AddRange(_carManager.List().Select(i => new LookupItem() { ID = i.Id, Name = string.Format("{0} - {1}", i.ArabaAdi, i.Locations) }).OrderBy(o => o.Name).ToList());

            var rentUserList = new List<LookupItem>() { new LookupItem() { ID = 0, Name = "Yeni Kiralayan", Order = 0 } };
            rentUserList.AddRange(_rentUserManager.List().Select(i => new LookupItem() { ID = i.Id, Name = string.Format("{0} - {1}", i.Name, i.PhoneNumber) }).OrderBy(o => o.Name).ToList());

            var model = new ReservationDetailModel()
            {
                Reservation = reservation,
                CarList = list,
                RentUserList = rentUserList,
                Locations = LookupManager.GetLookups(LookupType.Locations),
                ReservationStatuses = LookupManager.GetLookups(LookupType.ReservationStatus),
            };
            return View(model);
        }
    }
}