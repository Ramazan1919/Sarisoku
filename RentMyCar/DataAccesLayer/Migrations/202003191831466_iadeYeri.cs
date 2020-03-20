namespace DataAccesLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class iadeYeri : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Rezervasyons", "İadeYeri", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Rezervasyons", "İadeYeri");
        }
    }
}
