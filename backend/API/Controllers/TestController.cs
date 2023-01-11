using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using API.Models;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class TestController : ControllerBase
{

    public TestController()
    {
    }
    // [HttpGet(Name = "return_number")]
    // public int getNumber(int number)
    // {

    //     return 0;
    // }

    [HttpGet(Name = "b")]
    public List<int> GetList()
    {
        // DBContext
        List<int> numbers = new() { 12345, 4, 1, 3, 9, 8, 6, 7, 2, 0 };
        // The query variables can also be implicitly typed by using var
        // Query #1.
        IEnumerable<int> filteringQuery =
            from num in numbers
            where num < 3 || num > 7
            select num;
        var result = filteringQuery.ToList();
        return result;
    }
}

