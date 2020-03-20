
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataEntity
{
    public class Car
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required]
        public string ArabaAdi { get; set; }

        public string ImageUrl { get; set; }

        [Required]
        public string Yıl { get; set; }

        [Required]
        public string Plaka { get; set; }

        [Required]
        public string KasaTipi { get; set; }

        [Required]
        public string YakitTipi { get; set; }

        [Required]
        public decimal GunlukUcret { get; set; }
        
        //[Required]
        //public decimal KampanyaOranı { get; set; }

        //public decimal GuncelFiyat
        //{

        //    get { return GunlukUcret - ((GunlukUcret * KampanyaOranı) / 100); }
        //}

        [Required]
        public string VitesTürü { get; set; }

        public bool IsActive { get; set; }

        [Required]
        public int EhliyetYas { get; set; }

        [Required]
        public int BagajLitre { get; set; }

        [Required]
        public int SürücüYas { get; set; }

        [Required]
        public int YolcuSayisi { get; set; }

        public decimal Depozito { get; set; }

      
    }
}
