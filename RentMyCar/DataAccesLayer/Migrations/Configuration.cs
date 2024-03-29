﻿namespace DataAccesLayer.Migrations
{
    using DataAccessLayer.Concrete.EF;
    using DataEntity;

    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<RentACarContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(RentACarContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.

            if (context.Admins.Count() <= 0)
            {
                Seed2(context);
            }
        }

        public void Seed2(RentACarContext context)
        {
            Admin admin = new Admin()
            {
                Id = 1,
                Password = "12345",
                UserName = "Ramazan"
            };
            context.Admins.Add(admin);
            context.SaveChanges();

            RentUser rentUser = new RentUser()
            {
                Id = 1,
                Name = "Osman",
                PhoneNumber = "05423311086"
                
                
            };
            context.RentUsers.Add(rentUser);
            context.SaveChanges();


            Kampanya kampanya = new Kampanya()
            {

                Id = 1,
                IndirimOrani = "10",
                IsActive = true,
                kampanyaUrl="deneme.jpg",
                Text="Yuzde 10 indirimle tüm arabalarda erken rezervasyon indirimiz"
            

            };
            context.Kampanyas.Add(kampanya);
            context.SaveChanges();


            Car cars = new Car()
            {
                Id = 1,
                ImageUrl = "deneme.jpg",
                IsActive = true,
                EhliyetYas = 21,
                GunlukUcret = 100,
                IndirimOrani=10,
                SürücüYas = 25,
                VitesTipi = VitesTipi.Manuel,
                YakitTipi = YakitTipi.Dizel,
                KasaTipi = KasaTipi.HatchBack,
                Yıl = "2005",
                Depozito = 500,
                Marka=Marka.Renault,
                ArabaAdi = "Megan HB",
                Locations=Locations.Ankara
                
                
            };
            context.Cars.Add(cars);
            context.SaveChanges();

            Rezervasyon rezervasyon = new Rezervasyon()
            {
                Id = 1,
                AdminID = 1,
                CarID = 1,
                RentUserID = 1,
                AlisTarihi = DateTime.Now,
                AlisYeri = 1,
                İadeYeri=2,
                IadeTarihi = DateTime.Now,
                Status =  ReservationsStatus.Active
                
            };
            context.Rezervasyons.Add(rezervasyon);
            context.SaveChanges();
        }
    }
}
