﻿using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DataEntity
{
    public  class RentUser
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [DisplayName("Adı")]
        [Required(ErrorMessage ="Kiralayan Adı Boş Bırakılamaz"),StringLength(30)]
        public string Name { get; set; }

        [DisplayName("Telefon Numarası")]
        [Required(ErrorMessage = "Telefon Numarası Boş Bırakılamaz")]
        public string PhoneNumber { get; set; }
    }
}
