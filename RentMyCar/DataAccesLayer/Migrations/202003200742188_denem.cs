namespace DataAccesLayer.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class denem : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Locations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Yer = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Cars", "LocationId", c => c.Int(nullable: false));
            CreateIndex("dbo.Cars", "LocationId");
            AddForeignKey("dbo.Cars", "LocationId", "dbo.Locations", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Cars", "LocationId", "dbo.Locations");
            DropIndex("dbo.Cars", new[] { "LocationId" });
            DropColumn("dbo.Cars", "LocationId");
            DropTable("dbo.Locations");
        }
    }
}
