namespace DataAccesLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Reservation_AlisIadeYeri : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Rezervasyons", "AlisYeri", c => c.Int(nullable: false));
            AddColumn("dbo.Rezervasyons", "İadeYeri", c => c.Int(nullable: false));
            DropColumn("dbo.Rezervasyons", "AlisveIadeyeri");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Rezervasyons", "AlisveIadeyeri", c => c.String(nullable: false));
            DropColumn("dbo.Rezervasyons", "İadeYeri");
            DropColumn("dbo.Rezervasyons", "AlisYeri");
        }
    }
}
