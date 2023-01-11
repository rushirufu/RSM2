using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class DtoInventario
    {
        public int Id { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Observaciones { get; set; }
        [Required]
        public DateTime? FechaCreacion { get; set; }
    }
}