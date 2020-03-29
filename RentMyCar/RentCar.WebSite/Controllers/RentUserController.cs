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
    }
}