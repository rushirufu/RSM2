// using API.Dtos;
// using API.Models;
// using AutoMapper;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

// namespace API.Controllers;

// [ApiController]
// [Route("api/equipooficina")]
// public class EquipoOficinaController : ControllerBase
// {
//     private readonly SWFContext context;
//     private readonly IMapper mapper;

//     public EquipoOficinaController(SWFContext ApplicationDbContext, IMapper mapper)
//     {
//         context = ApplicationDbContext;
//         this.mapper = mapper;
//     }

//     [HttpGet("listar/")]
//     public async Task<ActionResult<List<DtoLecturaEquipoOficina>>> ListarEquipoOficina()
//     {
//         try
//         {
//             List<EquipoOficina> ListaEquipoOficina = await context.EquipoOficinas.OrderBy(x => x.Nombre).ToListAsync();
//             List<DtoLecturaEquipoOficina> DtoListaEquipoOficina = mapper.Map<List<DtoLecturaEquipoOficina>>(ListaEquipoOficina);
//             return DtoListaEquipoOficina;
//         }
//         catch (Exception ex)
//         {
//             throw new Exception("Something wrong happened in the ListarActivoTipo:", ex);
//         }
//     }

// }







