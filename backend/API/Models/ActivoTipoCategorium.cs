using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class ActivoTipoCategorium
    {
        public ActivoTipoCategorium()
        {
            Activos = new HashSet<Activo>();
        }

        public int Id { get; set; }
        public int? IdActivoTipo { get; set; }
        public string Nombre { get; set; }

        public virtual ActivoTipo IdActivoTipoNavigation { get; set; }
        public virtual ICollection<Activo> Activos { get; set; }
    }
}
