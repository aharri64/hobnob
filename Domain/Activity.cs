using System;

namespace Domain
{
    public class Activity
    {
        // When we return an activity, we will return an object with these properties
        public Guid Id { get; set; } //? we can do this all inside the client side (primary key)
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
    }
}