import http from "./http-server";

class ServicioActivo {
  ListarActivos() {
    return http.get("/activo/listar/");
  }

  BuscarPorID(id) {
    return http
      .get(`/activo/buscarid/${id}/`)
      .then()
      .catch(function (error) {
        // console.log(error);
      });
  }

  Crear(data) {
    console.log(data);
    return http
      .post("/activo/crear/", data)
      .then(function (response) {
        // console.log(response);
        // console.log("DATA:", response.data);
        // console.log("STATUS CODE:", response.status);
        // console.log("HEADERS:", response.headers);
        // console.log("RESPONSE:", response);
      })
      .catch(function (error) {
        // console.log(error);
      });
  }

  Actualizar(id, data) {
    return http
      .put(`/activo/actualizar/${id}`, data)
      .then(function (response) {
        // console.log(response);
        // console.log("DATA:", response.data);
        console.log("STATUS CODE:", response.status);
        // console.log("HEADERS:", response.headers);
        // console.log("RESPONSE:", response.error);
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      });
  }

  Eliminar(id) {
    return http
      .delete(`/activo/eliminar/${id}`)
      .then(function (response) {
        // console.log(response);
        // console.log("DATA:", response.data);
        console.log("STATUS CODE:", response.status);
        // console.log("HEADERS:", response.headers);
        // console.log("RESPONSE:", response.error);
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      });
  }
}
export default new ServicioActivo();
