import http from "./http-server";

class ServicioDato {
  ObtenerLista() {
    return http.get("/compania/listar/");
  }
}
export default new ServicioDato();
