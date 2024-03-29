﻿using DataEntity;
using System.Collections.Generic;
using System.Linq;

namespace BusınessLayer.Util
{
    public static class Extensions
    {
        public static bool HasElement<T>(this List<T> list)
        {
            return list != null && list.Any();
        }

        public static string GetStatusText(this Rezervasyon rezervasyon)
        {
            switch (rezervasyon.Status)
            {
                case ReservationsStatus.Passive: return "Pasif";
                case ReservationsStatus.Active: return "Aktif";
                case ReservationsStatus.Cancelled: return "İptal Edildi";
                default:
                    break;
            }
            return "Belirsiz";
        }
    }
}
