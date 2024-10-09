namespace API.Dtos
{
    public class DtoPatchActivo
    {
        public int Id { get; set; }
        public int? IdInformacion { get; set; }
        public int? IdDepartamento { get; set; }
        public int? IdUnidad { get; set; }
        public int? IdLocalidad { get; set; }
        public int? IdArea { get; set; }
        public int? IdActivoTipo { get; set; }
        public int? IdActivoTipoCategoria { get; set; }
        public string Marca { get; set; }
        public string Color { get; set; }
        public string Modelo { get; set; }
        public string Componentes { get; set; }
        public string Serial { get; set; }
        public bool? Condicion { get; set; }
        public string Observaciones { get; set; }
        public DateTime? FechaCreacion { get; set; }
    }
}