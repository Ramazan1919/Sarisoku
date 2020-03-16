using RentCar.WebSite.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RentCar.WebSite.Controllers
{
    [Auth]
    public class AdminController : Controller
    {
        // GET: Admin
      
        public ActionResult AdminOperation()
        {
            return View();
        }
    }
}