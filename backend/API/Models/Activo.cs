using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class Activo
    {
        public Activo()
        {
            IdInventarios = new HashSet<Inventario>();
        }

        public int Id { get; set; }
        public int? IdInformacion { get; set; }
        public int? IdDepartamento { get; set; }
        public int? IdLocalidad { get; set; }
        public int? IdActivoTipoCategoria { get; set; }
        public string IdCodigo { get; set; }
        public int? IdArea { get; set; }
        public string Marca { get; set; }
        public string Color { get; set; }
        public string Modelo { get; set; }
        public string Componentes { get; set; }
        public string Serial { get; set; }
        public int? IdCondicion { get; set; }
        public string Observaciones { get; set; }

        public virtual ActivoTipoCategorium IdActivoTipoCategoriaNavigation { get; set; }
        public virtual Area IdAreaNavigation { get; set; }
        public virtual Condicion IdCondicionNavigation { get; set; }
        public virtual Departamento IdDepartamentoNavigation { get; set; }
        public virtual Informacion IdInformacionNavigation { get; set; }
        public virtual Localidad IdLocalidadNavigation { get; set; }

        public virtual ICollection<Inventario> IdInventarios { get; set; }
    }
}
