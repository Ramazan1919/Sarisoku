namespace DataAccesLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class kampanya : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Kampanyas", "Text", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Kampanyas", "Text", c => c.String(nullable: false));
        }
    }
}
