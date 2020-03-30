using DataEntity;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace RentCar.WebSite.Models
{
    public class SearchModel
    {
        public int CarID { get; set; }

        public VitesTipi VitesTipi { get; set; }

        public YakitTipi YakitTipi { get; set; }

        public KasaTipi KasaTipi { get; set; }

        [DisplayName("Alış-İade Yeri ")]
        public Locations Locations { get; set; }

    

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime AlisTarihi { get; set; }


        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime IadeTarihi { get; set; }




    }
}