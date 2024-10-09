using API.Dtos;
using API.Models;
using AutoMapper;

namespace API.AutomapperProfiles
{
    public class AutomapperProfiles : Profile
    {
        public AutomapperProfiles()
        {
            // Lectura  <ModeloOrigen, ModeloDestino>
            CreateMap<Activo, DtoLecturaActivo>()
                .ForMember(destino => destino.IdActivoTipo,
                         origen => origen.MapFrom(fuente => fuente.IdActivoTipoCategoriaNavigation.IdActivoTipo)).ReverseMap();
            CreateMap<DtoPatchActivo, Activo>().ReverseMap();
            CreateMap<DtoLecturaActivo, Activo>();
            CreateMap<Informacion, DtoLecturaInformacion>();
            CreateMap<Departamento, DtoLecturaDepartamento>();
            CreateMap<Unidad, DtoLecturaUnidad>();
            CreateMap<Localidad, DtoLecturaLocalidad>();
            CreateMap<Area, DtoLecturaAreas>();
            CreateMap<ActivoTipo, DtoLecturaActivoTipo>();
            CreateMap<ActivoTipoCategorium, DtoLecturaActivoTipoCategorium>();
            CreateMap<Inventario, DtoInventario>();
            CreateMap<Condicion, DtoLecturaCondicion>().ReverseMap();



            // Escritura
            CreateMap<DtoEscrituraActivo, Activo>();
            // Actualizar
            CreateMap<DtoActualizarActivo, Activo>();
        }
    }
}