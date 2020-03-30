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
    public class RentUserController : Controller
    {
        private readonly RentUserManager _rentUserManager;

        public RentUserController()
        {
            _rentUserManager = new RentUserManager();
        }

        public ActionResult Index()
        {
            var model = _rentUserManager.List();
            return View(model);
        }


        public ActionResult Detail(int ? id)
        {


            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            RentUser re = _rentUserManager.Find(x => x.Id == id.Value);
            if (re == null)
            {
                return HttpNotFound();
            }

            

            return View(re);

        }


        [HttpPost]
        public ActionResult Detail(RentUser rentUser)
        {

            if (ModelState.IsValid)
            {
                RentUser rent = _rentUserManager.Find(x => x.Id == rentUser.Id);

                rent.Name = rentUser.Name;
                rent.PhoneNumber = rentUser.PhoneNumber;


                _rentUserManager.Update(rent);

            }
            else
            {
                return View(rentUser);
            }

            return RedirectToAction("Index","RentUser");
        }



        public ActionResult Delete(int ? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            else
            {
                var model = _rentUserManager.Find(i => i.Id == id);
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
            var user = _rentUserManager.Find(i => i.Id == id);
            _rentUserManager.Delete(user);
            return RedirectToAction("Index", "RentUser");
        }



    }
}