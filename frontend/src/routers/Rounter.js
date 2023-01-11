import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageActivoCrear from "../pages/PageActivoCrear";
import PageActivoEditar from "../pages/PageActivoEditar";
import PageActivoEliminar from "../pages/PageActivoEliminar";
import PageActivoHome from "../pages/PageActivoHome";
import PageCompanyHome from "../pages/PageCompanyHome";
import PageInventarioHome from "../pages/PageInventarioHome";
import PageNotFound from "../pages/PageNotFound";

const Router = function () {
  return (
    <Routes>
      <Route path="/" element={<PageActivoHome />} />
      {/* <Route path="/activo" element={<PageActivoHome />} /> */}
      <Route path="/activo/crear" element={<PageActivoCrear />} />
      <Route
        path="/activo/editar/:Id"
        element={<PageActivoEditar />}
      />
      <Route
        path="/activo/eliminar/:Id"
        element={<PageActivoEliminar />}
      />

      {/* <Route path="/inventario" element={<PageInventarioHome />} /> */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
