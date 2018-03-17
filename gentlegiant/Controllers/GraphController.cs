using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using gentlegiant.Models;
using Microsoft.AspNetCore.Mvc;

namespace gentlegiant.Controllers
{
    [Route("api/[Controller]")]
    public class GraphController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            var result = GenerateStock();
            return Ok(result);
        }

        private StockData GenerateStock()
        {
            var stock = new StockData()
            {
                Labels = new List<string>(),
                Data = new List<int>()
            };
            
            var random = new Random();
            for (var i = 0; i < 24; i++)
            {
                stock.Labels.Add(DateTime.Now.AddHours(i).ToString("HH:mm"));
                stock.Data.Add(random.Next(0, 100));
            }

            return stock;
        }
    }

}