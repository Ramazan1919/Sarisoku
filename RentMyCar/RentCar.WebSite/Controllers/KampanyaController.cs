using BusınessLayer.Concrete;
using DataEntity;
using RentCar.WebSite.Filter;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace RentCar.WebSite.Controllers
{
    [Auth]
    public class KampanyaController : Controller
    {

        KampanyaManager kampanyaManager = new KampanyaManager();
        // GET: Kampanya
        public ActionResult Index()
        {
            var model = kampanyaManager.List();
            return View(model);
        }
       


        // GET: Kampanya/Details/5
        public ActionResult Details(int id)
        {
            var model = kampanyaManager.GetById(id);
            return View(model);
        }

        // GET: Kampanya/Create
        public ActionResult Create()
        {


            return View();
        }

        // POST: Kampanya/Create
        [HttpPost]
        public ActionResult Create(Kampanya kampanya, HttpPostedFileBase kampanyaUrl )
        {
            if (ModelState.IsValid)
            {
                if (kampanyaUrl != null &&
                (kampanyaUrl.ContentType == "image/jpeg" ||
                kampanyaUrl.ContentType == "image/jpg" ||
                kampanyaUrl.ContentType == "image/png"))
                {
                    kampanyaManager.Insert(kampanya);
                    string filename = $"user_{kampanya.Id}.{kampanyaUrl.ContentType.Split('/')[1]}";
                    kampanyaUrl.SaveAs(Server.MapPath($"~/Content/Admin/Content/Photos/Kampanya/{filename}"));
                    kampanya.kampanyaUrl = filename;
                    kampanyaManager.Save();
                }
                return RedirectToAction("Index", "Kampanya");
            }
            else
            {
                return View(kampanya);
            }


        }

        // GET: Kampanya/Edit/5
        public ActionResult Edit(int ? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Kampanya  camp = kampanyaManager.Find(x => x.Id == id.Value);
            if (camp == null)
            {
                return HttpNotFound();
            }
            else
            {
                return View(camp);

            }
        }

        // POST: Kampanya/Edit/5
        [HttpPost]
        public ActionResult Edit(Kampanya kampanya, HttpPostedFileBase kampanyaUrl)
        {

            if (ModelState.IsValid)
            {
                if (kampanyaUrl != null &&
                (kampanyaUrl.ContentType == "image/jpeg" ||
                kampanyaUrl.ContentType == "image/jpg" ||
                kampanyaUrl.ContentType == "image/png"))
                {
                    kampanyaManager.Insert(kampanya);
                    string filename = $"userCamp_{kampanya.Id}.{kampanyaUrl.ContentType.Split('/')[1]}";
                    kampanyaUrl.SaveAs(Server.MapPath($"~/Content/Admin/Content/Photos/Kampanya/{filename}"));
                    kampanya.kampanyaUrl = filename;
                    kampanyaManager.Save();
                }
                var model = kampanyaManager.Find(x => x.Id == kampanya.Id);

                model.IndirimOrani = kampanya.IndirimOrani;
                model.IsActive = kampanya.IsActive;
                model.Text = kampanya.Text;
                model.kampanyaUrl = kampanya.kampanyaUrl;

                kampanyaManager.Update(model);


                return RedirectToAction("Index", "Kampanya");
            }



            return View(kampanya);


        }

        // GET: Kampanya/Delete/5
        public ActionResult Delete(int ? id)
        {

            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }

            Kampanya kampanya = kampanyaManager.Find(x => x.Id == id.Value);


            if (kampanya == null)
            {

                return HttpNotFound();
            }
            return View(kampanya);
        }

        // POST: Kampanya/Delete/5
        [HttpPost]
        public ActionResult Delete(int id)
        {
            Kampanya kampanya = kampanyaManager.Find(x => x.Id == id);


            kampanyaManager.Delete(kampanya);

            kampanyaManager.Save();

            return RedirectToAction("Index", "Kampanya");
        }
    }
}
