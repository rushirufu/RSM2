import http from "./http-server";

class ServicioMobiliarioTipo {
  ObtenerLista() {
    return http.get("/mobiliariotipo/listar/");
  }
}
export default new ServicioMobiliarioTipo();
