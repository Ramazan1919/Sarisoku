namespace DataAccesLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Edit_Delete : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Rezervasyons", "İadeYeri");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Rezervasyons", "İadeYeri", c => c.Int(nullable: false));
        }
    }
}
