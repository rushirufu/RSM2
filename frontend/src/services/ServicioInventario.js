import http from "./http-server";

class ServicioInventario {
  ObtenerLista() {
    return http.get("/inventario/listar/");
  }
}
export default new ServicioInventario();
