using Microsoft.EntityFrameworkCore;

namespace API.Helpers
{
    public static class HtppContextExtensions
    {
        public async static Task InsertarParametrosPaginacion<T>(
                this HttpContext httpContext,
                IQueryable<T> query,
                int cantidadRegistrosPorPagina
            )
        {
            double cantidad = await query.CountAsync();
            double cantidadPaginas = Math.Ceiling(cantidad / cantidadRegistrosPorPagina);
            httpContext.Response.Headers.Add("cantidadPaginas", cantidadPaginas.ToString());
        }
    }
}