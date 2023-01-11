import http from "./http-server";

class ServicioEquipoTecnoYcomunica {
  ObtenerLista() {
    return http.get("/equipotecnoycomunica/listar/");
  }
}
export default new ServicioEquipoTecnoYcomunica();
