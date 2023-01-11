using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class Informacion
    {
        public Informacion()
        {
            Activos = new HashSet<Activo>();
        }

        public int Id { get; set; }
        public string RazonSocial { get; set; }
        public string NombreComercial { get; set; }
        public string Alias { get; set; }
        public int Rnc { get; set; }
        public bool? EstaActiva { get; set; }
        public string Direccion { get; set; }
        public DateTime? FechaCreacion { get; set; }

        public virtual ICollection<Activo> Activos { get; set; }
    }
}
