using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using TodoList.Models;

namespace TodoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TasksController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Task> GetTasks()
        {
            return new List<Task> {
                new Task { Id = 1, Title = "Task 1", IsCompleted = false },
                new Task { Id = 2, Title = "Task 2", IsCompleted = true },
                new Task { Id = 3, Title = "Task 3", IsCompleted = true, DueDate = DateTimeOffset.UtcNow.AddDays(-1) }
            };
        }
    }
}