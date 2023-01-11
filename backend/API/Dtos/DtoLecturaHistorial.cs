using System;
using System.Collections.Generic;

namespace API.Dtos
{
    public class DtoLecturaHistorial
    {
        public int Id { get; set; }
        public int? IdInformacion { get; set; }
        public int? IdActivo { get; set; }
        public string Nombre { get; set; }
        public string Observaciones { get; set; }
        public DateTime? FechaCreacion { get; set; }
    }
}
