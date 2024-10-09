using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class Area
    {
        public Area()
        {
            Activos = new HashSet<Activo>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; }

        public virtual ICollection<Activo> Activos { get; set; }
    }
}
