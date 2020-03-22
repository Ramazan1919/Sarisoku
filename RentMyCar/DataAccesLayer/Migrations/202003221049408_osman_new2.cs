namespace DataAccesLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class osman_new2 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.RentUsers", "Name", c => c.String(nullable: false, maxLength: 100));
            AlterColumn("dbo.RentUsers", "PhoneNumber", c => c.String(nullable: false, maxLength: 20));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.RentUsers", "PhoneNumber", c => c.String(nullable: false));
            AlterColumn("dbo.RentUsers", "Name", c => c.String(nullable: false, maxLength: 30));
        }
    }
}
