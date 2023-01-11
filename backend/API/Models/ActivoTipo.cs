using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class ActivoTipo
    {
        public ActivoTipo()
        {
            ActivoTipoCategoria = new HashSet<ActivoTipoCategorium>();
        }

        public int Id { get; set; }
        public string Nombre { get; set; }
        public DateTime? FechaCreacion { get; set; }

        public virtual ICollection<ActivoTipoCategorium> ActivoTipoCategoria { get; set; }
    }
}
