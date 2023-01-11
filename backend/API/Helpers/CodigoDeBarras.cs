// namespace Helpers
// {
//     public class CodigoDeBarras
//     {
//         public string GenerarCodigo(int id, int Compania, int Departamento, int Unidad, int Localidad, int Tipo, int Categoria)
//         {
//             ActivoTipoCategorium activoTipoCategorium = context.ActivoTipoCategoria.FirstOrDefault(x => x.Id == activo.IdActivoTipoCategoria);
//             int? Compania = activo.IdDepartamento;
//             int? Departamento = activo.IdDepartamento;
//             int? Unidad = activo.IdUnidad;
//             int? Localidad = activo.IdLocalidad;
//             int? ActivoTipo = activoTipoCategorium.IdActivoTipo;
//             int? Categoria = activo.IdActivoTipoCategoria;
//             int? Activo = activo.Id;
//             string CodigoDeBarra = string.Concat(Compania, Departamento, Unidad, Localidad, ActivoTipo, Categoria, Activo);
//             activo.IdCodigo = Int64.Parse(CodigoDeBarra);
//             return "asdasd";
//         }
//     }
// }