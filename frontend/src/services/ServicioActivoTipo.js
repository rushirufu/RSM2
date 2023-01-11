import http from "./http-server";

class ServicioActivoTipo {
  ObtenerLista() {
    return http.get("/activotipo/listar/");
  }
}
export default new ServicioActivoTipo();
