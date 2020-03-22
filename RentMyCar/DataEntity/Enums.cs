namespace DataEntity
{
    public enum ReservationsStatus
    {
        Passive = 0,
        Active = 1,
        Cancelled = 2
    }

    public enum StatusType
    {
        Passive = 0,
        Active = 1,
    }

    public enum LookupType
    {
        Base = 0,
        Locations = 1,
        ReservationStatus=2,
        Status=3,
        VitesTipi=4,
        YakitTipi=5,
        KasaTipi=6,
        Marka=7
    }

    public enum VitesTipi
    {
        None = 0,
        Manuel = 1,
        YariOtomatik = 2,
        Otomatik = 3,
    }

    public enum YakitTipi
    {
        None = 0,
        Benzin = 1,
        Dizel = 2,
        LPG = 3,
        Hybrid = 4,
    }

    public enum KasaTipi
    {
        None = 0,
        Sedan = 1,
        HatchBack = 2,
        Station = 3,
       
    }
    public enum Marka
    {
        None = 0,
        Renault = 1,
        Honda = 2,
        Citroen = 3,
        Hyundaı=4,
        Audi=5,
        Mercedes=6,
        Fiat=7,
        Dacia=8,
        Kıa=9,
        Chevrolet=10,
        BMW=11,
        Peugot=12,
        Mazda=13,
        Nıssan=14,
        Mını=15,
        Opel=16,
        Porsche=17,
        Seat=18,
        Skoda=19,
        Toyota=20,
        Wolkswagen=21,
        Volvo=22,
        Tesla=23,
        Ford=24,

    }

    public enum Locations
    {
        None = 0,
        İstanbul = 1,
        Ankara = 2,
        İzmir = 3,
        Kayseri = 4,
        Antalya = 5,
        Alanya = 6,
        Konya= 7
        

    }

}
