using API.Dtos;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/activotipocat")]
public class ActivoTipoCategoriaController : ControllerBase
{
    private readonly WebAppDbContext context;
    private readonly IMapper mapper;

    public ActivoTipoCategoriaController(WebAppDbContext ApplicationDbContext, IMapper mapper)
    {
        context = ApplicationDbContext;
        this.mapper = mapper;
    }

    [HttpGet("listar/")]
    public async Task<ActionResult<List<DtoLecturaActivoTipoCategorium>>> ListarActivoTipoCategirias()
    {
        try
        {
            List<ActivoTipoCategorium> ListaActivoTipoCategoria = await context.ActivoTipoCategoria.OrderBy(x => x.Nombre).ToListAsync();
            List<DtoLecturaActivoTipoCategorium> DtoListaActivoTipoCategoria = mapper.Map<List<DtoLecturaActivoTipoCategorium>>(ListaActivoTipoCategoria);
            return DtoListaActivoTipoCategoria;
        }
        catch (Exception ex)
        {
            throw new Exception("Something wrong happened in the ListarActivoTipoCategirias:", ex);
        }
    }

}







