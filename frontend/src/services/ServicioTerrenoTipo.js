import http from "./http-server";

class ServicioTerrenoTipo {
  ObtenerLista() {
    return http.get("/terrenotipo/listar/");
  }
}
export default new ServicioTerrenoTipo();
