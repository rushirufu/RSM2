import http from "./http-server";

class ServicioCondicion {
  ObtenerLista() {
    return http.get("/condicion/listar/");
  }
}
export default new ServicioCondicion();
