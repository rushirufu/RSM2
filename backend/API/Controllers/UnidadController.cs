using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using API.Dtos;

namespace API.Controllers;

[ApiController]
[Route("api/unidad")]
public class UnidadController : ControllerBase
{
    private readonly WebAppDbContext context;
    private readonly IMapper mapper;

    public UnidadController(WebAppDbContext ApplicationDbContext, IMapper mapper)
    {
        context = ApplicationDbContext;
        this.mapper = mapper;
    }

    [HttpGet("listar/")]
    public async Task<ActionResult<List<DtoLecturaUnidad>>> ListarUnidades()
    {
        try
        {
            List<Unidad> ListaUnidad = await context.Unidads.OrderBy(x => x.Nombre).ToListAsync();
            List<DtoLecturaUnidad> DtoListaUnidad = mapper.Map<List<DtoLecturaUnidad>>(ListaUnidad);
            return DtoListaUnidad;
        }
        catch (Exception ex)
        {
            throw new Exception("Something wrong happened in the ListarUnidades:", ex);
        }
    }

}







