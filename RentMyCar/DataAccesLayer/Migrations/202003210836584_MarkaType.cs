namespace DataAccesLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class MarkaType : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Cars", "Marka", c => c.Int(nullable: false));
            AlterColumn("dbo.Cars", "KasaTipi", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Cars", "KasaTipi", c => c.String(nullable: false));
            DropColumn("dbo.Cars", "Marka");
        }
    }
}
