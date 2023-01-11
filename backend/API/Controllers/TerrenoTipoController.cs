// using API.Dtos;
// using API.Models;
// using AutoMapper;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

// namespace API.Controllers;

// [ApiController]
// [Route("api/terrenotipo")]
// public class TerrenoTipoController : ControllerBase
// {
//     private readonly SWFContext context;
//     private readonly IMapper mapper;

//     public TerrenoTipoController(SWFContext ApplicationDbContext, IMapper mapper)
//     {
//         context = ApplicationDbContext;
//         this.mapper = mapper;
//     }

//     [HttpGet("listar/")]
//     public async Task<ActionResult<List<DtoLecturaTerrenoTipo>>> ListarMobiliarioTipo()
//     {
//         try
//         {
//             List<TerrenoTipo> ListaTerrenoTipo = await context.TerrenoTipos.OrderBy(x => x.Nombre).ToListAsync();
//             List<DtoLecturaTerrenoTipo> DtoListaTerrenoTipo = mapper.Map<List<DtoLecturaTerrenoTipo>>(ListaTerrenoTipo);
//             return DtoListaTerrenoTipo;
//         }
//         catch (Exception ex)
//         {
//             throw new Exception("Something wrong happened in the ListarTerrenoTipo:", ex);
//         }
//     }

// }







