using DataEntity;
using System;
using System.Linq;
using System.Collections.Generic;
using BusınessLayer.Util;

namespace BusınessLayer.Concrete
{
    public static class LookupManager
    {
        private static List<LookupItem> _lookupItems;

        static LookupManager()
        {
            Load();
        }

        public static List<LookupItem> GetLookups(LookupType lookupType)
        {
            try
            {
                if (_lookupItems.HasElement())
                {
                    return _lookupItems.Where(i => i.Type == lookupType).OrderBy(o => o.Order).ToList();
                }
            }
            catch (Exception ex)
            {

            }
            return new List<LookupItem>();
        }

        public static string GetLookupName(LookupType lookupType, int value, string defaultValue = "-")
        {
            try
            {
                if (_lookupItems.HasElement())
                {
                    var lookup = _lookupItems.FirstOrDefault(i => i.Type == lookupType && i.ID == value);
                    if (lookup != null)
                    {
                        return lookup.Name;
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return defaultValue;
        }

        private static void Load()
        {
            _lookupItems = _lookupItems ?? new List<LookupItem>();

            _lookupItems.Add(new LookupItem() { ID = 1, Name = "Çorum", Type = LookupType.Locations, ParentID = 0, Order = 2, Status = StatusType.Active });
            _lookupItems.Add(new LookupItem() { ID = 2, Name = "Ankara", Type = LookupType.Locations, ParentID = 0, Order = 1, Status = StatusType.Active });
            _lookupItems.Add(new LookupItem() { ID = 3, Name = "Atatürk Havalimanı", Type = LookupType.Locations, ParentID = 0, Order = 3, Status = StatusType.Active });

            AddItem(ref _lookupItems, (int)ReservationsStatus.Active, "Aktif", LookupType.ReservationStatus, 1);
            AddItem(ref _lookupItems, (int)ReservationsStatus.Passive, "Pasif", LookupType.ReservationStatus, 2);
            AddItem(ref _lookupItems, (int)ReservationsStatus.Cancelled, "İptal Edildi", LookupType.ReservationStatus, 3);

            AddItem(ref _lookupItems, (int)VitesTipi.Manuel, "Manuel", LookupType.VitesTipi, 3);
            AddItem(ref _lookupItems, (int)VitesTipi.YariOtomatik, "Yarı Otomatik", LookupType.VitesTipi, 2);
            AddItem(ref _lookupItems, (int)VitesTipi.Otomatik, "Otomatik", LookupType.VitesTipi, 1);

            AddItem(ref _lookupItems, (int)YakitTipi.Benzin, "Benzin", LookupType.YakitTipi, 1);
            AddItem(ref _lookupItems, (int)YakitTipi.Dizel, "Dizel", LookupType.YakitTipi, 2);
            AddItem(ref _lookupItems, (int)YakitTipi.LPG, "LPG", LookupType.YakitTipi, 3);
            AddItem(ref _lookupItems, (int)YakitTipi.Hybrid, "Hybrid", LookupType.YakitTipi, 4);
        }

        private static void AddItem(ref List<LookupItem> lookupItems, int id, string name, LookupType type, int order, StatusType status = StatusType.Active, int parentID = 0)
        {
            _lookupItems.Add(new LookupItem() { ID = id, Name = name, Type = type, ParentID = parentID, Order = order, Status = status});
        }
    }
}
