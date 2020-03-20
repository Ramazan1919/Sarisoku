using BusınessLayer.Concrete;
using DataEntity;
using RentCar.WebSite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RentACar.Controllers
{
    public class HomeController : Controller
    {

        CarManager carManager = new CarManager();
        ReservationManager rezervationManager = new ReservationManager();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult ListOfCars()
        {

            var model = carManager.List();

            return View(model);
        }

        public ActionResult Contact()
        {
           

            return View();
        }




        public ActionResult SearchCar(SearchModel model)
        {
            if (ModelState.IsValid)
            {
                var carlist = carManager.List(x=>x.IsActive );

                var reservationList = rezervationManager.List(x => x.Status == ReservationsStatus.Active    && ((x.AlisTarihi < model.Rezervasyon.AlisTarihi && x.IadeTarihi > model.Rezervasyon.AlisTarihi)
                                        || (x.AlisTarihi > model.Rezervasyon.AlisTarihi && x.AlisTarihi >= model.Rezervasyon.IadeTarihi)));

                //Şuana kadar elimizde aktif araç listesi ve verilen tarihlerde yapılmış rezervasyonlar var
                //Araçları alış yeri / İade yerine göre filtreleyeceksen bunu rezervasyon üzerinden değil ara. üzerinden yapman lazım
                //Rezervasyon bir araca yapılmış bir işlem oluş X aracını şu tarihte şurdan alacağım şu tarihte şuraya bırakacağım bilgisini içerir
                //Şimdi eğer adam ben aracı çorumdan alacağım diyorsa o zaman lokasyon bazlı araç listesi olması lazım 
                //Yani çorumda şuan şu şu şu araçlar var diyeceğimiz bir datayı tutmak lazım. Bunu da şöyle yapabilriiz bence
                //Bir aracın aynı anda bulanabileceği bir lokasyon olabilir değil mi
                //Dolaysıyla Car modeli üzerine "LocationID" isminde bir özellik ekleyelim. Aracı oluştururken bunu sçtiririz adama
                //Daha sonra her rezervasyon tamamlandığında aracın LocationID bilgisi rezervasyonun iade yeri ile güncellenir

                //Veya ikinci alternatif bir yol;
                //Aracın en son yaptığı rezervasyonu buluruz bu rezervasyondaki iade yeri aracın şuankki yeri olur
                //Peki araç henüz hiç rezerve edilmezse ilk lokasyonu nere olacak
                //Bunun içinde araç oluşturulurken ekranda bi konum seçtirip bu konumla bi tane default rezervasyon oluştururuz dolaysıyla aracın
                //şuanki konumu o rezervasyoındaki iade yeri olur

                //Bu arada araçları sadece biniş yerine göre filtrelemeyebiliriz, iade yerine göre filtrelemenin mantığı yok
                //Ben aracı çorumdan aldım, site sahibinin bana seçtirdiği istediğim lokasyona bırakabiliriz bunda bi kısıt yok

             


                //CarID ye göre de filtremelenin bir mantığı yok, eğer araç için filtrleme yapacaksan markasına (Hyundai, Renault), 
                //modeline (Clio, Accent, Era), Vites Tipine (otomatik, manuel) göre filtreletmek daha mantıklı
                //Bunları düşünerek arama modelini tekrar düşün üzerinde konuşalım.

                //benim sana ilk ipucum "Rezervasyon model" yerine bir search model oluşturman!! 
                //Şimdilik aşağıdaki kısımları commentledim sen düşün beraber konuşalım sonra
            }

            ViewBag.Nocar = "Belitilen aralıklarda uygun araba bulunamadı.Tekrar Deneyin..";
            return RedirectToAction("ListOfCars", "Home");
        }
    }
}