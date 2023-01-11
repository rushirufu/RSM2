namespace API.Dtos
{
    public class DtoEscrituraUsuario
    {
        public string? email { get; set; }
        public string? contrasenaA { get; set; }
        public string? contrasenaB { get; set; }
        public byte[] contrasenaSalt { get; set; }
        public byte[] contrasenaHash { get; set; }
    }
}