using API.Dtos;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/compania")]
public class InformacionController : ControllerBase
{
    private readonly WebAppDbContext context;
    private readonly IMapper mapper;

    public InformacionController(WebAppDbContext ApplicationDbContext, IMapper mapper)
    {
        context = ApplicationDbContext;
        this.mapper = mapper;
    }

    [HttpGet("listar/")]
    public async Task<ActionResult<List<DtoLecturaInformacion>>> ListarDatos()
    {
        List<Informacion> ListaInformacion = await context.Informacions.OrderBy(x => x.Alias).ToListAsync();
        List<DtoLecturaInformacion> ListaDtoDato = mapper.Map<List<DtoLecturaInformacion>>(ListaInformacion);
        return ListaDtoDato;
    }

}







