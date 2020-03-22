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

            _lookupItems.Add(new LookupItem() { ID = 1, Name = "İstanbul", Type = LookupType.Locations, ParentID = 0, Order = 2, Status = StatusType.Active });
            _lookupItems.Add(new LookupItem() { ID = 2, Name = "Ankara", Type = LookupType.Locations, ParentID = 0, Order = 1, Status = StatusType.Active });
            _lookupItems.Add(new LookupItem() { ID = 3, Name = "İzmir", Type = LookupType.Locations, ParentID = 0, Order = 3, Status = StatusType.Active });
            _lookupItems.Add(new LookupItem() { ID = 4, Name = "Kayseri", Type = LookupType.Locations, ParentID = 0, Order = 4, Status = StatusType.Active });
            _lookupItems.Add(new LookupItem() { ID = 5, Name = "Antalya", Type = LookupType.Locations, ParentID = 0, Order = 5, Status = StatusType.Active });
            _lookupItems.Add(new LookupItem() { ID = 6, Name = "Alanya", Type = LookupType.Locations, ParentID = 0, Order = 6, Status = StatusType.Active });
            _lookupItems.Add(new LookupItem() { ID = 7, Name = "Konya", Type = LookupType.Locations, ParentID = 0, Order = 7, Status = StatusType.Active });



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

            AddItem(ref _lookupItems, (int)KasaTipi.Sedan, "Sedan", LookupType.KasaTipi, 1);
            AddItem(ref _lookupItems, (int)KasaTipi.Station, "Station", LookupType.KasaTipi, 2);
            AddItem(ref _lookupItems, (int)KasaTipi.HatchBack, "HatchBack", LookupType.KasaTipi, 3);


            AddItem(ref _lookupItems, (int)Marka.Audi, "Audi", LookupType.Marka,1);
            AddItem(ref _lookupItems, (int)Marka.Chevrolet, "Chevrolet", LookupType.Marka,2);
            AddItem(ref _lookupItems, (int)Marka.Citroen, "Citroen", LookupType.Marka,3);
            AddItem(ref _lookupItems, (int)Marka.Dacia, "Dacia", LookupType.Marka,4);
            AddItem(ref _lookupItems, (int)Marka.Fiat, "Fiat", LookupType.Marka,5);
            AddItem(ref _lookupItems, (int)Marka.Honda, "Honda", LookupType.Marka,6);
            AddItem(ref _lookupItems, (int)Marka.Hyundaı, "Hyundaı", LookupType.Marka,7);
            AddItem(ref _lookupItems, (int)Marka.Kıa, "Kıa", LookupType.Marka,8);
            AddItem(ref _lookupItems, (int)Marka.Mercedes, "Mercedes", LookupType.Marka,9);
            AddItem(ref _lookupItems, (int)Marka.Renault, "Renault", LookupType.Marka,10);
            AddItem(ref _lookupItems, (int)Marka.BMW, "BMW", LookupType.Marka,11);
            AddItem(ref _lookupItems, (int)Marka.Mazda, "Mazda", LookupType.Marka,12);
            AddItem(ref _lookupItems, (int)Marka.Mını, "Mını", LookupType.Marka,13);
            AddItem(ref _lookupItems, (int)Marka.Nıssan, "Nıssan", LookupType.Marka,14);
            AddItem(ref _lookupItems, (int)Marka.Opel, "Opel", LookupType.Marka,15);
            AddItem(ref _lookupItems, (int)Marka.Peugot, "Peugot", LookupType.Marka,16);
            AddItem(ref _lookupItems, (int)Marka.Porsche, "Porsche", LookupType.Marka,17);
            AddItem(ref _lookupItems, (int)Marka.Seat, "Seat", LookupType.Marka,18);
            AddItem(ref _lookupItems, (int)Marka.Skoda, "Skoda", LookupType.Marka,19);
            AddItem(ref _lookupItems, (int)Marka.Tesla, "Tesla", LookupType.Marka,20);
            AddItem(ref _lookupItems, (int)Marka.Toyota, "Toyota", LookupType.Marka,21);
            AddItem(ref _lookupItems, (int)Marka.Volvo, "v", LookupType.Marka,22);
            AddItem(ref _lookupItems, (int)Marka.Wolkswagen, "v", LookupType.Marka,23);
            AddItem(ref _lookupItems, (int)Marka.Ford, "Ford", LookupType.Marka, 23);

        }

        private static void AddItem(ref List<LookupItem> lookupItems, int id, string name, LookupType type, int order, StatusType status = StatusType.Active, int parentID = 0)
        {
            _lookupItems.Add(new LookupItem() { ID = id, Name = name, Type = type, ParentID = parentID, Order = order, Status = status});
        }
    }
}
