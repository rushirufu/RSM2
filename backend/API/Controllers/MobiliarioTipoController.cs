// using API.Dtos;
// using API.Models;
// using AutoMapper;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

// namespace API.Controllers;

// [ApiController]
// [Route("api/mobiliariotipo")]
// public class MobiliarioTipoController : ControllerBase
// {
//     private readonly SWFContext context;
//     private readonly IMapper mapper;

//     public MobiliarioTipoController(SWFContext ApplicationDbContext, IMapper mapper)
//     {
//         context = ApplicationDbContext;
//         this.mapper = mapper;
//     }

//     [HttpGet("listar/")]
//     public async Task<ActionResult<List<DtoLecturaMobiliarioTipo>>> ListarMobiliarioTipo()
//     {
//         try
//         {
//             List<MobiliarioTipo> ListaMobiliarioTipo = await context.MobiliarioTipos.OrderBy(x => x.Nombre).ToListAsync();
//             List<DtoLecturaMobiliarioTipo> DtoListaMobiliarioTipo = mapper.Map<List<DtoLecturaMobiliarioTipo>>(ListaMobiliarioTipo);
//             return DtoListaMobiliarioTipo;
//         }
//         catch (Exception ex)
//         {
//             throw new Exception("Something wrong happened in the ListarMobiliarioTipo:", ex);
//         }
//     }

// }







