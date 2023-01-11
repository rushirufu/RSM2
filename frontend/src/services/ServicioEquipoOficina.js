import http from "./http-server";

class ServicioEquipoOficina {
  ObtenerLista() {
    return http.get("/equipooficina/listar/");
  }
}
export default new ServicioEquipoOficina();
