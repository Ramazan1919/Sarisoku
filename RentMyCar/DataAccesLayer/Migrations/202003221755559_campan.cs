namespace DataAccesLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class campan : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Kampanyas",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        kampanyaUrl = c.String(),
                        Text = c.String(nullable: false),
                        IsActive = c.Boolean(nullable: false),
                        IndirimOrani = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Kampanyas");
        }
    }
}
