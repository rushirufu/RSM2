using API.Dtos;
using API.Helpers;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[Controller]")]
public class CondicionController : ControllerBase
{
    private readonly WebAppDbContext context;
    private readonly IMapper mapper;

    public CondicionController(WebAppDbContext DbContext, IMapper mapper)
    {
        context = DbContext;
        this.mapper = mapper;
    }

    [HttpGet]
    [Route("listar")]
    public async Task<ActionResult<List<DtoLecturaCondicion>>> ListarCondicion()
    {
        try
        {
            IQueryable<Condicion> query = (from c in context.Condicions
                                           orderby c.Id descending
                                           select new Condicion { Id = c.Id, Nombre = c.Nombre });
            List<Condicion> ListaCondicion = await query.ToListAsync();

            List<DtoLecturaCondicion> ListaDtoCondicion = mapper.Map<List<DtoLecturaCondicion>>(ListaCondicion);
            return ListaDtoCondicion;
        }
        catch (Exception ex)
        {
            throw new Exception("Something wrong happened in the Listar Condicion:", ex);
        }
    }
}
