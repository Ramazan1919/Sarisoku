using System.Collections.Generic;
using System.Web.Mvc;
using BusınessLayer.Util;
using System.Linq;
using DataEntity;

namespace RentCar.WebSite.Models
{
    public static class Extensions
    {
        public static List<SelectListItem> ToItems(this List<LookupItem> lookupList, int selectedValue, bool defaultOption = true)
        {
            var result = new List<SelectListItem>();
            if (defaultOption) { result.Add(new SelectListItem() { Value = "", Text = "Seçiniz" }); }

            if (lookupList.HasElement())
            {
                result.AddRange(lookupList.Select(i => new SelectListItem() { Value = i.ID.ToString(), Text = i.Name, Selected = i.ID == selectedValue }));
            }
            return result;
        }
    }
}