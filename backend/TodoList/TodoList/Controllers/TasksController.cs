using Microsoft.AspNetCore.Mvc;
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
            return new List<Task>();
        }
    }
}