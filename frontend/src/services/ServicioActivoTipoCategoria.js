import http from "./http-server";

class ServicioActivoTipoCategoria {
  ObtenerLista() {
    return http.get("/activotipocat/listar/");
  }
}
export default new ServicioActivoTipoCategoria();
