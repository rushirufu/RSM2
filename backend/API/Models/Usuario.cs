using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class Usuario
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Contrasena { get; set; }
        public DateTime FechaExpiracion { get; set; }
        public DateTime FechaCreacion { get; set; }
        public bool? EstaActivo { get; set; }
        public string Alias { get; set; }
        public int? IdEmpleado { get; set; }
    }
}
