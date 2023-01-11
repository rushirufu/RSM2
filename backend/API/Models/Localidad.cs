using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class Localidad
    {
        public Localidad()
        {
            Activos = new HashSet<Activo>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; }
        public DateTime? FechaCreacion { get; set; }

        public virtual ICollection<Activo> Activos { get; set; }
    }
}
