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
        Status=3
    }
}
