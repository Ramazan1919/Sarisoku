using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataEntity
{
   public  class Kampanya
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string kampanyaUrl { get; set; }

        [Required]
        public string Text { get; set; }

       
        public bool IsActive { get; set; }

        [Required]
        public int IndirimOrani { get; set; }


    }
}
