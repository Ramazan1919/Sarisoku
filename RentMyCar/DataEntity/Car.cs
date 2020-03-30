
using System.Collections.Generic;
using System.ComponentModel;
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

        [Required]
        public Marka Marka  { get; set; }

        public string ImageUrl { get; set; }

        [Required]
        public string Yıl { get; set; }

        [Required]
        public KasaTipi KasaTipi { get; set; }

        [Required]
        public YakitTipi YakitTipi { get; set; }

        [DisplayName("AlışYeri")]
        [Required]
        public Locations Locations { get; set; }


        [Required]
        public int GunlukUcret { get; set; }
        
        [Required]
       public int  IndirimOrani { get; set; }

        public int GuncelFiyat
        {

           get { return GunlukUcret - ((GunlukUcret * IndirimOrani) / 100); }
        }

        [Required]
        public VitesTipi VitesTipi { get; set; }

        public bool IsActive { get; set; }

        [Required]
        public int EhliyetYas { get; set; }

       

        [Required]
        public int SürücüYas { get; set; }

       

        public decimal Depozito { get; set; }


      

      
    }
}
