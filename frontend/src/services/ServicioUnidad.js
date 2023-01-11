import http from "./http-server";

class ServicioUnidad {
  ObtenerLista() {
    return http.get("/unidad/listar/");
  }
}
export default new ServicioUnidad();
