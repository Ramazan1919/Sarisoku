﻿using DataEntity;
using System;

namespace RentCar.WebSite.Models
{
    public class SearchModel
    {
        public int CarID { get; set; }

        public VitesTipi VitesTipi { get; set; }

        public YakitTipi YakitTipi { get; set; }

        public int AlisYeri { get; set; }

        public DateTime AlisTarihi { get; set; }

        public DateTime IadeTarihi { get; set; }
    }
}