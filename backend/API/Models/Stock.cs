using System;
using System.Collections.Generic;

namespace API.Models
{
    public partial class Stock
    {
        public int Id { get; set; }
        public int? IdInformacion { get; set; }
        public int? IdActivo { get; set; }
        public int? TotalActivos { get; set; }
    }
}
