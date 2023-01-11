// using System.Security.Cryptography;
// using API.Dtos;
// using API.Models;
// using AutoMapper;
// using Microsoft.AspNetCore.Mvc;

// namespace API.Controllers;

// [ApiController]
// [Route("api/autenticacion")]
// public class AutenticacionController : ControllerBase
// {
//     private readonly WebAppDbContext context;
//     private readonly IMapper mapper;
//     private readonly Usuario usuario;


//     public AutenticacionController(WebAppDbContext DbContext, IMapper Mapper, Usuario Usuario)
//     {
//         context = DbContext;
//         mapper = Mapper;
//         usuario = Usuario;
//     }


//     [HttpPost("registro")]
//     public async Task<ActionResult<Usuario>> Registrar(DtoEscrituraUsuario dtoUsuario)
//     {
//         dtoUsuario.email.ToLower().Trim();
//         CrearContrasenaHash(dtoUsuario.contrasenaA, dtoUsuario.contrasenaSalt, dtoUsuario.contrasenaHash);
//         Usuario usuario = mapper.Map<Usuario>(dtoUsuario);
//         context.AddAsync(usuario);

//     }

//     private void CrearContrasenaHash(string contrasena, byte[] contrasenaSalt, byte[] contrasenaHash)
//     {
//         HMACSHA512 cripto = new HMACSHA512();
//         contrasenaSalt = cripto.Key;
//         contrasenaHash = cripto.ComputeHash(System.Text.Encoding.UTF8.GetBytes(contrasena));

//     }

// }

