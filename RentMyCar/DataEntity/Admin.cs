using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataEntity
{
   public  class Admin
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }


        [DisplayName("Kullanıcı Adı")]
        [Required(ErrorMessage ="Kullanıcı Adı Boş Bırakılamaz"),StringLength(30)]
        public string UserName { get; set; }

        [DisplayName("Şifre")]
        [DataType(DataType.Password)]
        [Required(ErrorMessage = "Şifre Boş Bırakılamaz")]
        public string Password { get; set; }

        public List<Rezervasyon> Rezervasyons { get; set; }

    }
}
