using BusınessLayer.Concrete;
using DataEntity;
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


                FormsAuthentication.SetAuthCookie(model.UserName, false);


                return RedirectToAction("AdminOperation", "Admin");
            }
            else
            {
                ViewBag.Mesaj = "Geçersiz Kullanıcı adı veya Şifre";

                return View(admin);

            }

            
        }


        public ActionResult Logout()
        {

            FormsAuthentication.SignOut();

            return RedirectToAction("Index", "Home");
        }

    }
}