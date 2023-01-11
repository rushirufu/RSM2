// using API.Dtos;
// using API.Models;
// using AutoMapper;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

// namespace API.Controllers;

// [ApiController]
// [Route("api/equipotecnoycomunica")]
// public class EquipoTecnoYcomunicaController : ControllerBase
// {
//     private readonly SWFContext context;
//     private readonly IMapper mapper;

//     public EquipoTecnoYcomunicaController(SWFContext ApplicationDbContext, IMapper mapper)
//     {
//         context = ApplicationDbContext;
//         this.mapper = mapper;
//     }

//     [HttpGet("listar/")]
//     public async Task<ActionResult<List<DtoLecturaEquipoTecnoYcomunica>>> ListarEquipoTecnoYcomunica()
//     {
//         try
//         {
//             List<EquipoTecnoYcomunica> ListaEquipoTecnoYcomunica = await context.EquipoTecnoYcomunicas.OrderBy(x => x.Nombre).ToListAsync();
//             List<DtoLecturaEquipoTecnoYcomunica> DtoListaEquipoTecnoYcomunica = mapper.Map<List<DtoLecturaEquipoTecnoYcomunica>>(ListaEquipoTecnoYcomunica);
//             return DtoListaEquipoTecnoYcomunica;
//         }
//         catch (Exception ex)
//         {
//             throw new Exception("Something wrong happened in the ListarActivoTipo:", ex);
//         }
//     }

// }







