using System;

namespace TodoList.Models
{
    public class Task
    {
        public uint Id { get; set; }
        public string Title { get; set; }
        public DateTimeOffset? DueDate { get; set; }
        public bool IsCompleted { get; set; }
    }
}
