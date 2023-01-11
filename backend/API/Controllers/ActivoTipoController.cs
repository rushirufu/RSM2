using API.Dtos;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/activotipo")]
public class ActivoTipoController : ControllerBase
{
    private readonly WebAppDbContext context;
    private readonly IMapper mapper;

    public ActivoTipoController(WebAppDbContext ApplicationDbContext, IMapper mapper)
    {
        context = ApplicationDbContext;
        this.mapper = mapper;
    }

    [HttpGet("listar/")]
    public async Task<ActionResult<List<DtoLecturaActivoTipo>>> ListarActivoTipo()
    {
        try
        {
            List<ActivoTipo> ListaActivoTipo = await context.ActivoTipos.OrderBy(x => x.Nombre).ToListAsync();
            List<DtoLecturaActivoTipo> DtoListaActivoTipo = mapper.Map<List<DtoLecturaActivoTipo>>(ListaActivoTipo);
            return DtoListaActivoTipo;
        }
        catch (Exception ex)
        {
            throw new Exception("Something wrong happened in the ListarActivoTipo:", ex);
        }
    }

}







