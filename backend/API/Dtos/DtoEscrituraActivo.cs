using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class DtoEscrituraActivo
    {
        [Required]
        public int cantidad { get; set; }
        [Required]
        public int? IdInformacion { get; set; }
        [Required]
        public int? IdDepartamento { get; set; }
        [Required]
        public int? IdUnidad { get; set; }
        [Required]
        public int? IdLocalidad { get; set; }
        [Required]
        public int? IdActivoTipoCategoria { get; set; }
        public string IdCodigo { get; set; }
        public string Marca { get; set; }
        public string Color { get; set; }
        public string Modelo { get; set; }
        public string Componentes { get; set; }
        public string Serial { get; set; }
        public int? IdCondicion { get; set; }
        public string Asignado { get; set; }
        public string Observaciones { get; set; }
    }
}
