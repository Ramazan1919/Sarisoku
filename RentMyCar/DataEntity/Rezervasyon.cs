using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataEntity
{
    public class Rezervasyon
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public int AdminID { get; set; }

        [Required(ErrorMessage = "Araç seçmediniz!")]
        public int CarID { get; set; }

        public int RentUserID { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime AlisTarihi { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime IadeTarihi { get; set; }

        [Required(ErrorMessage ="Alış yeri seçmediniz!")]
        public int AlisYeri { get; set; }

        [Required(ErrorMessage = "Alış yeri seçmediniz!")]
        public int İadeYeri { get; set; }

        public ReservationsStatus Status { get; set; }

        public virtual Car Car { get; set; }
        public virtual RentUser RentUser { get; set; }
    }
}
