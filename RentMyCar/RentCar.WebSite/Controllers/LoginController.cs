using BusınessLayer.Concrete;
using DataEntity;
using RentCar.WebSite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace RentCar.WebSite.Controllers
{
    public class LoginController : Controller
    {

        AdminManager adminManager = new AdminManager();
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }


        [HttpPost]
    
        public ActionResult Index( Admin admin)
        {
            if (ModelState.IsValid)
            {
                var model = adminManager.List(x => x.UserName == admin.UserName && x.Password == admin.Password).FirstOrDefault();

                if (model != null)
                {
                    SessionModel.Set<Admin>("login", admin);


                    return RedirectToAction("Index", "Admin");

                }

                ViewBag.Mesaj = "Geçersiz Kullanıcı adı veya Şifre";

             
            }


            return View(admin);
        }


        public ActionResult Logout()
        {

            Session.Clear();

           

            return RedirectToAction("Index", "Home");
        }

    }
}