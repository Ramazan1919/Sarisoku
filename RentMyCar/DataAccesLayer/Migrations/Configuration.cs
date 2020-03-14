namespace DataAccesLayer.Migrations
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
            Seed2(context);

        }

        public void Seed2(RentACarContext context)
        {

            Rezervasyon rezervasyon = new Rezervasyon()
            {

                Id=1,
                AlisTarihi=DateTime.Now,
                AlisveIadeyeri="Çorum",
                IadeTarihi=DateTime.Now,

            };
            context.Rezervasyons.Add(rezervasyon);
            context.SaveChanges();

            Admin admin = new Admin()
            {
                Id=1,
                Password="12345",
                UserName="Ramazan",

            };
            context.Admins.Add(admin);
            context.SaveChanges();


            Cars cars = new Cars()
            {
                Id=1,
                ImageUrl="deneme.jpg",
                IsActive=true,
                BagajLitre=5,
                EhliyetYas=21,
                GunlukUcret=50,
                KampanyaOranı=10,
                KasaTipi="Sedan",
                Plaka="19-tk 393",
                RezervasyonID=1,
                SürücüYas=25,
                ToplamKiralanmaSayisi=10,
                VitesTürü="Manuel",
                YakitTipi="Dizel",
                YolcuSayisi=5,
                Yıl="2005",
                Depozito=500,
                ArabaAdi="Megan HB",

            };

            context.Cars.Add(cars);
            context.SaveChanges();
        }
    }
}
