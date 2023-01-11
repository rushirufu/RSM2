using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class Inventario
    {
        public Inventario()
        {
            IdActivos = new HashSet<Activo>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Observaciones { get; set; }
        public DateTime? FechaCreacion { get; set; }

        public virtual ICollection<Activo> IdActivos { get; set; }
    }
}
