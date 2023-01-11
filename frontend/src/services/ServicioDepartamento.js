import http from "./http-server";

class ServicioDepartamento {
  ObtenerLista() {
    return http.get("/departamento/listar/");
  }
}
export default new ServicioDepartamento();
