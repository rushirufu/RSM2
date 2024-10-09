import http from "./http-server";

class ServicioArea {
  ObtenerLista() {
    return http.get("/localidad/listarAreas");
  }
}
export default new ServicioArea();
