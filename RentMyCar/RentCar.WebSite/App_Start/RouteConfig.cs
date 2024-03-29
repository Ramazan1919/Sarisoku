﻿using System.Web.Mvc;
using System.Web.Routing;

namespace RentCar.WebSite
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute("ReservationManagement", "rezervasyon-yonetimi", new { controller = "Reservation", action = "Index" });
            routes.MapRoute("ReservationDetail", "rezervasyon-detay/{id}", new { controller = "Reservation", action = "Detail", id = UrlParameter.Optional });
            routes.MapRoute("RentUserManagement", "kiralayan-yonetimi", new { controller = "RentUser", action = "Index" });
            routes.MapRoute("RentUserDetail", "kiralayan-detay/{id}", new { controller = "RentUser", action = "Detail", id = UrlParameter.Optional });
            routes.MapRoute("RentUserReservations", "kiralayan/{rentUserId}/rezervasyonlar", new { controller = "Reservation", action = "Index", rentUserId = UrlParameter.Optional });

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
