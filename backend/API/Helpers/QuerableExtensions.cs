using API.Dtos;

namespace API.Helpers
{
    public static class QuerableExtensions
    {
        public static IQueryable<T> Paginar<T>(this IQueryable<T> query, DtoPaginacion dtoPaginacion)
        {
            return query
            .Skip((dtoPaginacion.Pagina - 1) * dtoPaginacion.CantidadRegistrosPorPagina)
            .Take(dtoPaginacion.CantidadRegistrosPorPagina);
        }
    }
}