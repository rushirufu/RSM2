using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class Historial
    {
        public int Id { get; set; }
        public int? IdInformacion { get; set; }
        public int? IdActivo { get; set; }
        public string Nombre { get; set; }
        public string Observaciones { get; set; }
        public DateTime? FechaCreacion { get; set; }

        public virtual Activo IdActivoNavigation { get; set; }
        public virtual Informacion IdInformacionNavigation { get; set; }
    }
}
