using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace gentlegiant.Controllers
{
    [Route("api/[Controller]")]
    public class GraphController : Controller
    {
        [HttpGet]
        public IActionResult Greetings() {
            return Ok("Hello from ASP.NET Core Web API.");
        }
    }

}