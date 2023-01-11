using API.Dtos;
using API.Helpers;
using API.Models;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[Controller]")]
public class InventarioController : ControllerBase
{
    private readonly WebAppDbContext context;
    private readonly IMapper mapper;

    public InventarioController(WebAppDbContext DbContext, IMapper mapper)
    {
        context = DbContext;
        this.mapper = mapper;
    }

    [HttpGet]
    [Route("listar")]
    public async Task<ActionResult<List<DtoInventario>>> ListarInventario()
    {
        try
        {
            IQueryable<Inventario> query = (from a in context.Inventarios
                                            orderby a.Id descending
                                            select new Inventario { Id = a.Id, Nombre = a.Nombre, Observaciones = a.Observaciones });
            List<Inventario> ListaInventario = await query.ToListAsync();

            List<DtoInventario> ListaDtoInventario = mapper.Map<List<DtoInventario>>(ListaInventario);
            return ListaDtoInventario;
        }
        catch (Exception ex)
        {
            throw new Exception("Something wrong happened in the ListarInventario:", ex);
        }
    }
}

//     [HttpGet]
//     [Route("buscarid/{id}", Name = "BuscarPorID")]
//     public async Task<ActionResult<DtoLecturaActivo>> BuscarPorID(int id)
//     {
//         try
//         {
//             var activo = await context.Activos
//             .Include(x => x.IdActivoTipoCategoriaNavigation)
//             .ThenInclude(x => x.IdActivoTipoNavigation)
//             .FirstOrDefaultAsync(activo => activo.Id == id);
//             if (activo == null)
//             {
//                 return NotFound();
//             }

//             DtoLecturaActivo dtoActivo = mapper.Map<DtoLecturaActivo>(activo);
//             return Ok(dtoActivo);
//         }
//         catch (Exception ex)
//         {
//             throw new Exception("Something wrong happened in the Activo-buscar:", ex);
//         }
//     }

//     [HttpPost("crear/")]
//     public async Task<ActionResult> Crear([FromBody] DtoEscrituraActivo dto_activo)
//     {
//         Activo activo = mapper.Map<Activo>(dto_activo);
//         context.Add(activo);
//         await context.SaveChangesAsync();
//         ActivoTipoCategorium activoTipoCategorium = context.ActivoTipoCategoria.FirstOrDefault(x => x.Id == activo.IdActivoTipoCategoria);
//         int? Compania = activo.IdDepartamento;
//         int? Departamento = activo.IdDepartamento;
//         int? Unidad = activo.IdUnidad;
//         int? Localidad = activo.IdLocalidad;
//         int? ActivoTipo = activoTipoCategorium.IdActivoTipo;
//         int? Categoria = activo.IdActivoTipoCategoria;
//         int? Activo = activo.Id;

//         string CodigoDeBarra = string.Concat(Compania, Departamento, Unidad, Localidad, Categoria, Activo);
//         activo.IdCodigo = Int64.Parse(CodigoDeBarra);
//         await context.SaveChangesAsync();
//         DtoLecturaActivo dtoActivo = mapper.Map<DtoLecturaActivo>(activo);
//         return new CreatedAtRouteResult("BuscarPorID", new { Id = dtoActivo.Id }, dtoActivo);
//     }

//     [HttpPut]
//     [Route("actualizar/{id:int}")]
//     public async Task<ActionResult> Actualizar([FromBody] DtoLecturaActivo dtoActivo, int id)
//     {
//         try
//         {
//             if (dtoActivo.Id != id)
//             {
//                 return BadRequest("el id del activo no coincide");
//             }

//             string CodigoDeBarra = string.Concat(dtoActivo.IdInformacion, dtoActivo.IdDepartamento, dtoActivo.IdUnidad, dtoActivo.IdLocalidad, dtoActivo.IdActivoTipoCategoria, dtoActivo.Id);
//             dtoActivo.IdCodigo = Int64.Parse(CodigoDeBarra);
//             Activo activo = mapper.Map<Activo>(dtoActivo);
//             //

//             context.Entry(activo).State = EntityState.Modified;
//             await context.SaveChangesAsync();
//             return NoContent();
//         }
//         catch (Exception ex)
//         {
//             throw new Exception("Something wrong happened in the Activo Actualizar:", ex);
//         }

//     }

//     [HttpDelete]
//     [Route("eliminar/{id}")]
//     public async Task<ActionResult> Eliminar(int id)
//     {
//         Boolean existe = await context.Activos.AnyAsync(x => x.Id == id);
//         if (!existe)
//         {
//             return NotFound();
//         }
//         context.Remove(new Activo() { Id = id });
//         await context.SaveChangesAsync();
//         return NoContent();
//     }
// }
