namespace DataAccesLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Last : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Rezervasyons", "AdminID", c => c.Int(nullable: false));
            CreateIndex("dbo.Rezervasyons", "AdminID");
            AddForeignKey("dbo.Rezervasyons", "AdminID", "dbo.Admins", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Rezervasyons", "AdminID", "dbo.Admins");
            DropIndex("dbo.Rezervasyons", new[] { "AdminID" });
            DropColumn("dbo.Rezervasyons", "AdminID");
        }
    }
}
