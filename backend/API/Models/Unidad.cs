using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class Unidad
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public DateTime? FechaCreacion { get; set; }
    }
}
