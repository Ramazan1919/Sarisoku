using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataEntity
{
   public  class Cars
    {


        [Key]
        public int Id { get; set; }

        public string  ImageUrl { get; set; }

        [Required]
        public string Yıl { get; set; }
        [Required]
        public string Plaka { get; set; }
        [Required]
        public string KasaTipi { get; set; }
        [Required]
        public string YakitTipi { get; set; }
        [Required]
        public int GunlukUcret { get; set; }
        [Required]
        public int ToplamKiralanmaSayisi { get; set; }

        [Required]
        public int KampanyaOranı { get; set; }

        public int GuncelFiyat  {

            get { return GunlukUcret - ((GunlukUcret * KampanyaOranı) / 100); }

                }
        [Required]
        public string VitesTürü { get; set; }

        public bool IsActive { get; set; }

        [Required]
        public int EhliyetYas { get; set; }
        [Required]
        public int BagajLitre { get; set; }
        [Required]
        public int SürücüYas  { get; set; }
        [Required]
        public int YolcuSayisi { get; set; }

        public int Depozito { get; set; }
        public int RezervasyonID { get; set; }

        public Rezervasyon Rezervasyon { get; set; }



    }
}
