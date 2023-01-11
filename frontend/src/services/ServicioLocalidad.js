import http from "./http-server";

class ServicioLocalidad {
  ObtenerLista() {
    return http.get("/localidad/listar/");
  }
}
export default new ServicioLocalidad();
