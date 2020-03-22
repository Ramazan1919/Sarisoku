namespace DataAccesLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class osman_new : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Admins",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserName = c.String(nullable: false, maxLength: 30),
                        Password = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Cars",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        ArabaAdi = c.String(nullable: false),
                        Marka = c.Int(nullable: false),
                        ImageUrl = c.String(),
                        Yıl = c.String(nullable: false),
                        Plaka = c.String(nullable: false),
                        KasaTipi = c.Int(nullable: false),
                        YakitTipi = c.Int(nullable: false),
                        Locations = c.Int(nullable: false),
                        GunlukUcret = c.Decimal(nullable: false, precision: 18, scale: 2),
                        VitesTipi = c.Int(nullable: false),
                        IsActive = c.Boolean(nullable: false),
                        EhliyetYas = c.Int(nullable: false),
                        BagajLitre = c.Int(nullable: false),
                        SürücüYas = c.Int(nullable: false),
                        YolcuSayisi = c.Int(nullable: false),
                        Depozito = c.Decimal(nullable: false, precision: 18, scale: 2),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.RentUsers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 30),
                        PhoneNumber = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Rezervasyons",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        AdminID = c.Int(nullable: false),
                        CarID = c.Int(nullable: false),
                        RentUserID = c.Int(nullable: false),
                        AlisTarihi = c.DateTime(nullable: false),
                        IadeTarihi = c.DateTime(nullable: false),
                        AlisYeri = c.Int(nullable: false),
                        İadeYeri = c.Int(nullable: false),
                        Status = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Cars", t => t.CarID, cascadeDelete: true)
                .ForeignKey("dbo.RentUsers", t => t.RentUserID, cascadeDelete: true)
                .Index(t => t.CarID)
                .Index(t => t.RentUserID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Rezervasyons", "RentUserID", "dbo.RentUsers");
            DropForeignKey("dbo.Rezervasyons", "CarID", "dbo.Cars");
            DropIndex("dbo.Rezervasyons", new[] { "RentUserID" });
            DropIndex("dbo.Rezervasyons", new[] { "CarID" });
            DropTable("dbo.Rezervasyons");
            DropTable("dbo.RentUsers");
            DropTable("dbo.Cars");
            DropTable("dbo.Admins");
        }
    }
}
