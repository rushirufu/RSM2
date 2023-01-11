import http from "./http-server";

class ServicioEquipoTransporte {
  ObtenerLista() {
    return http.get("/equipotransporte/listar/");
  }
}
export default new ServicioEquipoTransporte();
