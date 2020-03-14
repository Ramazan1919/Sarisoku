namespace DataAccesLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class denedene1 : DbMigration
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
                        ImageUrl = c.String(),
                        Yıl = c.String(nullable: false),
                        Plaka = c.String(nullable: false),
                        KasaTipi = c.String(nullable: false),
                        YakitTipi = c.String(nullable: false),
                        GunlukUcret = c.Int(nullable: false),
                        ToplamKiralanmaSayisi = c.Int(nullable: false),
                        KampanyaOranı = c.Int(nullable: false),
                        VitesTürü = c.String(nullable: false),
                        IsActive = c.Boolean(nullable: false),
                        EhliyetYas = c.Int(nullable: false),
                        BagajLitre = c.Int(nullable: false),
                        SürücüYas = c.Int(nullable: false),
                        YolcuSayisi = c.Int(nullable: false),
                        Depozito = c.Int(nullable: false),
                        RezervasyonID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Rezervasyons", t => t.RezervasyonID, cascadeDelete: true)
                .Index(t => t.RezervasyonID);
            
            CreateTable(
                "dbo.Rezervasyons",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        AlisveIadeyeri = c.String(nullable: false),
                        AlisTarihi = c.DateTime(nullable: false),
                        IadeTarihi = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Cars", "RezervasyonID", "dbo.Rezervasyons");
            DropIndex("dbo.Cars", new[] { "RezervasyonID" });
            DropTable("dbo.Rezervasyons");
            DropTable("dbo.Cars");
            DropTable("dbo.Admins");
        }
    }
}
