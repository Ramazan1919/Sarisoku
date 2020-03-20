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
        YakitTipi=5
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
}
