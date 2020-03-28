using System.Linq;
using System.Collections.Generic;
using BusınessLayer.Abstract;
using BusınessLayer.Util;
using DataEntity;
using System;

namespace BusınessLayer.Concrete
{
    public class ReservationManager : ManagerBase<Rezervasyon>
    {
        private readonly CarManager _carManager;
        private readonly RentUserManager _rentUserManager;

        public ReservationManager()
        {
            _carManager = new CarManager();
            _rentUserManager = new RentUserManager();
        }

        public List<Rezervasyon> GetReservationList()
        {
            var list = List();
            if (list.HasElement())
            {
                var carIds = list.Select(i => i.CarID).Distinct();
                var carList = _carManager.List(car => carIds.Contains(car.Id));

                var rentUserIds = list.Select(i => i.RentUserID).Distinct();
                var retUserList = _rentUserManager.List(user => rentUserIds.Contains(user.Id));

                list = list.Select(i =>
                {
                    i.Car = carList.FirstOrDefault(c => c.Id == i.CarID);
                    i.RentUser = retUserList.FirstOrDefault(r => r.Id == i.RentUserID);
                    return i;
                }).OrderByDescending(o => o.AlisTarihi).ToList();
            }
            return list;
        }

        public Rezervasyon GetReservationDetail(int id)
        {
            if (id > 0)
            {
                var result = GetById(id);
                if (result != null)
                {
                    result.Car = result.CarID > 0 ? _carManager.GetById(result.CarID) : null;
                    result.RentUser = result.RentUserID > 0 ? _rentUserManager.GetById(result.RentUserID) : null;
                }
                return result;
            }

            return new Rezervasyon()
            {
                Status = ReservationsStatus.Active,
                AlisTarihi = DateTime.Now,
                IadeTarihi = DateTime.Now
            };
        }
    }
}
