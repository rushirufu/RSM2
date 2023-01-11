// using API.Dtos;
// using API.Models;
// using AutoMapper;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

// namespace API.Controllers;

// [ApiController]
// [Route("api/equipotransporte")]
// public class EquipoTransporteController : ControllerBase
// {
//     private readonly SWFContext context;
//     private readonly IMapper mapper;

//     public EquipoTransporteController(SWFContext ApplicationDbContext, IMapper mapper)
//     {
//         context = ApplicationDbContext;
//         this.mapper = mapper;
//     }

//     [HttpGet("listar/")]
//     public async Task<ActionResult<List<DtoLecturaEquipoTransporte>>> ListarEquipoTransporte()
//     {
//         try
//         {
//             List<EquipoTransporte> ListaEquipoTransporte = await context.EquipoTransportes.OrderBy(x => x.Nombre).ToListAsync();
//             List<DtoLecturaEquipoTransporte> DtoListaEquipoTransporte = mapper.Map<List<DtoLecturaEquipoTransporte>>(ListaEquipoTransporte);
//             return DtoListaEquipoTransporte;
//         }
//         catch (Exception ex)
//         {
//             throw new Exception("Something wrong happened in the ListarEquipoTransporte:", ex);
//         }
//     }

// }







