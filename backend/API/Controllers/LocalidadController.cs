using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using API.Dtos;

namespace API.Controllers;

[ApiController]
[Route("api/localidad")]
public class LocalidadController : ControllerBase
{
    private readonly WebAppDbContext context;
    private readonly IMapper mapper;

    public LocalidadController(WebAppDbContext ApplicationDbContext, IMapper mapper)
    {
        context = ApplicationDbContext;
        this.mapper = mapper;
    }

    [HttpGet("listar/")]
    public async Task<ActionResult<List<DtoLecturaLocalidad>>> ListarLocalidades()
    {
        try
        {
            List<Localidad> ListaLocalidad = await context.Localidads.OrderBy(x => x.Nombre).ToListAsync();
            List<DtoLecturaLocalidad> DtoListaLocalidad = mapper.Map<List<DtoLecturaLocalidad>>(ListaLocalidad);
            return DtoListaLocalidad;
        }
        catch (Exception ex)
        {
            throw new Exception("Something wrong happened in the ListarLocalides:", ex);
        }
    }

    [HttpGet("listarAreas/")]
    public async Task<ActionResult<List<DtoLecturaAreas>>> ListarAreas()
    {
        try
        {
            List<Area> ListaArea = await context.Areas.OrderBy(x => x.Nombre).ToListAsync();
            List<DtoLecturaAreas> DtoListaAreas = mapper.Map<List<DtoLecturaAreas>>(ListaArea);
            return DtoListaAreas;
        }
        catch (Exception ex)
        {
            throw new Exception("Something wrong happened in the ListarAreas:", ex);
        }
    }

}







