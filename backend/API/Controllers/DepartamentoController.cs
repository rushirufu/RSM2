using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using API.Dtos;

namespace API.Controllers;

[ApiController]
[Route("api/departamento")]
public class DepartamentoController : ControllerBase
{
    private readonly WebAppDbContext context;
    private readonly IMapper mapper;

    public DepartamentoController(WebAppDbContext ApplicationDbContext, IMapper mapper)
    {
        context = ApplicationDbContext;
        this.mapper = mapper;
    }

    [HttpGet("listar/")]
    public async Task<ActionResult<List<DtoLecturaDepartamento>>> ListarDepartamentos()
    {
        try
        {
            List<Departamento> ListaDepartamentos = await context.Departamentos.OrderBy(x => x.Nombre).ToListAsync();
            List<DtoLecturaDepartamento> DtoListaDepartamentos = mapper.Map<List<DtoLecturaDepartamento>>(ListaDepartamentos);
            return DtoListaDepartamentos;
        }
        catch (Exception ex)
        {
            throw new Exception("Something wrong happened in the ListarDepartamento:", ex);
        }
    }

}







