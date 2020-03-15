namespace DataEntity
{
    public  class LookupItem
    {
        public LookupType Type { get; set; }

        public int ID { get; set; }

        public int ParentID { get; set; }

        public string Name { get; set; }

        public int Order { get; set; }

        public StatusType Status { get; set; }
    }
}
