// import { useEffect, useState } from "react";
// import { Link, useRouteMatch, useParams } from "react-router-dom";
// import {
//   Button,
//   ButtonContainer,
//   DivInput,
//   DivInputBox,
//   DivRegistroActivo,
//   DivSelect,
//   Label,
//   Select,
// } from "../components/FormStyled";
// import InputGroup from "../components/InputGroup";
// import TextArea from "../components/TextArea";
// import ServicioActivo from "../services/ServicioActivo";
// import ServicioActivoTipo from "../services/ServicioActivoTipo";
// import ServicioActivoTipoCategoria from "../services/ServicioActivoTipoCategoria";
// import ServicioDepartamento from "../services/ServicioDepartamento";
// import ServicioInformacion from "../services/ServicioInformacion";
// import ServicioLocalidad from "../services/ServicioLocalidad";
// import ServicioUnidad from "../services/ServicioUnidad";
// import {
//   Content,
//   ContentBody,
//   ContentHead,
//   Wrapper,
// } from "../style/Content";

// const PageActivoEditar = function () {
//   // Campos del formulario
//   const [compania, setCompania] = useState("0");
//   const [departamento, setDepartamento] = useState(0);
//   const [localidad, setLocalidad] = useState(0);
//   const [unidad, setUnidad] = useState(0);
//   const [activotipo, setActivoTipo] = useState(0);
//   const [activotipocatego, setActivoTipoCatego] = useState(0);
//   const [marca, setMarca] = useState("");
//   const [modelo, setModelo] = useState("");
//   const [color, setColor] = useState("");
//   const [componente, setComponente] = useState("");
//   const [serial, setSerial] = useState("");
//   const [observacion, setObservacion] = useState("");
//   // Data desde la base de dato
//   const [estado_activo, setEstado_Activo] = useState([]);
//   const [estado_dato, setEstado_Dato] = useState([]);
//   const [estado_departamento, setEstado_Departamento] = useState([]);
//   const [estado_localidad, setEstado_Localidad] = useState([]);
//   const [estado_unidad, setEstado_Unidad] = useState([]);
//   const [estado_activotipos, setEstado_ActivoTipo] = useState([]);
//   const [estado_activotipoCat, setEstado_activoCat] = useState([]);
//   async function JalarData() {
//     // Activo
//     try {
//       await ServicioActivo.ObtenerLista().then((response) => {
//         setEstado_Activo({ activos: response.data });
//       });
//     } catch (error) {
//     } finally {
//     }
//     // Informacion
//     try {
//       await ServicioInformacion.ObtenerLista().then((response) => {
//         setEstado_Dato({ companias: response.data });
//       });
//     } catch (error) {
//     } finally {
//     }

//     // Departamento
//     try {
//       await ServicioDepartamento.ObtenerLista().then((response) => {
//         setEstado_Departamento({ departamentos: response.data });
//       });
//     } catch (error) {
//     } finally {
//     }
//     // Unidad
//     try {
//       await ServicioUnidad.ObtenerLista().then((response) => {
//         setEstado_Unidad({ unidades: response.data });
//       });
//     } catch (error) {
//     } finally {
//     }
//     // Localidad
//     try {
//       await ServicioLocalidad.ObtenerLista().then((response) => {
//         setEstado_Localidad({ localidades: response.data });
//       });
//     } catch (error) {
//     } finally {
//     }
//     // ActivoTipo
//     try {
//       await ServicioActivoTipo.ObtenerLista().then((response) => {
//         setEstado_ActivoTipo({ activoTipos: response.data });
//       });
//     } catch (error) {
//     } finally {
//     }
//     // ActivoTipo Categoria
//     try {
//       await ServicioActivoTipoCategoria.ObtenerLista().then(
//         (response) => {
//           setEstado_activoCat({ categorias: response.data });
//         }
//       );
//     } catch (error) {
//     } finally {
//     }
//   }

//   useEffect(function () {
//     JalarData();
//   }, []);

//   const manejadorActivoTipo = (e) => {
//     setActivoTipo(e.target.value);
//     setActivoTipoCatego(0);
//   };

//   const manejadorCompania = (e) => {
//     console.log(compania);
//     setCompania(e.target.value);
//   };

//   const manejadorDepartamento = (e) => {
//     setDepartamento(e.target.value);
//   };

//   const manejadorUnidad = (e) => {
//     setUnidad(e.target.value);
//   };

//   const manejadorLocalidad = (e) => {
//     setLocalidad(e.target.value);
//   };

//   const manejadorActivoTipoCategoria = (e) => {
//     setActivoTipoCatego(e.target.value);
//   };

//   const manejadorMarca = (e) => {
//     setMarca(e.target.value);
//   };

//   const manejadorModelo = (e) => {
//     setModelo(e.target.value);
//   };

//   const manejadorColor = (e) => {
//     setColor(e.target.value);
//   };

//   const manejadorComponente = (e) => {
//     setComponente(e.target.value);
//   };

//   const manejadorSerial = (e) => {
//     setSerial(e.target.value.toUpperCase());
//   };

//   const manejadorObservacion = (e) => {
//     setObservacion(e.target.value);
//   };

//   const manejadorSumit = function (e) {
//     e.preventDefault();

//     if (compania === 0) {
//     }

//     let formulario = {
//       idinformacion: compania,
//       iddepartamento: departamento,
//       idunidad: unidad,
//       Idlocalidad: localidad,
//       IdactivoTipoCategoria: activotipocatego,
//       marca: marca,
//       modelo: modelo,
//       color: color,
//       componentes: componente,
//       serial: serial,
//       observaciones: observacion,
//     };

//     let Data = JSON.stringify(formulario);
//     ServicioActivo.Crear(Data);
//   };

//   const manejadorLimpiar = () => {
//     setCompania(0);
//     setDepartamento(0);
//     setUnidad(0);
//     setLocalidad(0);
//     setActivoTipo(0);
//     setActivoTipoCatego(0);
//     setMarca("");
//     setColor("");
//     setModelo("");
//     setComponente("");
//     setSerial("");
//     setObservacion("");

//     return (
//       <>
//         <h2>Topics</h2>

//         <ul>
//           <li>
//             <Link to={`${match.url}/components`}>Components</Link>
//           </li>
//           <li>
//             <Link to={`${match.url}/props-v-state`}>
//               Props v. State
//             </Link>
//           </li>
//         </ul>
//       </>
//     );
//   };
// };
// export default PageActivoEditar;

// <Wrapper>
//   <Content>
//     <ContentHead>
//       <h1>Editar Activo</h1>
//     </ContentHead>

//     <ContentBody>
//       <DivRegistroActivo>
//         <div>
//           <h2>Datos del activo</h2>
//           <DivInputBox>
//             <DivInput>
//               {/* Companias */}
//               <DivSelect>
//                 <Label htmlFor="idInformacion">Compañia:</Label>
//                 {Array.isArray(estado_dato.companias) ? (
//                   <Select
//                     className={
//                       parseInt(compania) != "0" ? "Activated" : null
//                     }
//                     name="idInformacion"
//                     id="idInformacion"
//                     value={compania}
//                     onChange={manejadorCompania}
//                   >
//                     <option key="0" value="0">
//                       -- Seleccionar --
//                     </option>
//                     {estado_dato.companias.map((x) => (
//                       <option key={x.id} value={x.id}>
//                         {x.alias}
//                       </option>
//                     ))}
//                   </Select>
//                 ) : null}
//               </DivSelect>
//               {/* Departamentos */}
//               <DivSelect>
//                 <Label htmlFor="idDepartamento">Departamento:</Label>
//                 {Array.isArray(estado_departamento.departamentos) ? (
//                   <Select
//                     className={
//                       departamento != "0" ? "Activated" : null
//                     }
//                     name="idDepartamento"
//                     id="idDepartamento"
//                     value={departamento}
//                     onChange={manejadorDepartamento}
//                   >
//                     <option key="0" value="0">
//                       -- Seleccionar --
//                     </option>
//                     {estado_departamento.departamentos.map((x) => (
//                       <option key={x.id} value={x.id}>
//                         {x.nombre}
//                       </option>
//                     ))}
//                   </Select>
//                 ) : null}
//               </DivSelect>
//             </DivInput>

//             <DivInput>
//               {/* Unidad */}
//               <DivSelect>
//                 <Label htmlFor="idUnidad">Unidad:</Label>
//                 {Array.isArray(estado_unidad.unidades) ? (
//                   <Select
//                     className={unidad != "0" ? "Activated" : null}
//                     name="idUnidad"
//                     id="idUnidad"
//                     value={unidad}
//                     onChange={manejadorUnidad}
//                   >
//                     <option key="0" value="0">
//                       -- Seleccionar --
//                     </option>
//                     {estado_unidad.unidades.map((x) => (
//                       <option key={x.id} value={x.id}>
//                         {x.nombre}
//                       </option>
//                     ))}
//                   </Select>
//                 ) : null}
//               </DivSelect>
//               {/* Localidad */}
//               <DivSelect>
//                 <Label htmlFor="idLocalidad">Localidad:</Label>
//                 {Array.isArray(estado_localidad.localidades) ? (
//                   <Select
//                     className={localidad != "0" ? "Activated" : null}
//                     name="idLocalidad"
//                     id="idLocalidad"
//                     value={localidad}
//                     onChange={manejadorLocalidad}
//                   >
//                     <option key="0" value="0">
//                       -- Seleccionar --
//                     </option>
//                     {estado_localidad.localidades.map((x) => (
//                       <option key={x.id} value={x.id}>
//                         {x.nombre}
//                       </option>
//                     ))}
//                   </Select>
//                 ) : null}
//               </DivSelect>
//             </DivInput>
//             <DivInput>
//               {/* Activo Tipo */}
//               <DivSelect>
//                 <Label htmlFor="activotipo">Tipo de activo:</Label>
//                 {Array.isArray(estado_activotipos.activoTipos) ? (
//                   <Select
//                     className={activotipo != "0" ? "Activated" : null}
//                     name="activotipo"
//                     id="activotipo"
//                     value={activotipo}
//                     onChange={manejadorActivoTipo}
//                   >
//                     <option key="0" value="0">
//                       -- Seleccionar --
//                     </option>
//                     {estado_activotipos.activoTipos.map((x) => (
//                       <option key={x.id} value={x.id}>
//                         {x.nombre}
//                       </option>
//                     ))}
//                   </Select>
//                 ) : null}
//               </DivSelect>
//               {/* Activo Tipo Categoria */}
//               <DivSelect>
//                 <Label htmlFor="idActivoTipoCategoria">
//                   Categoría:
//                 </Label>
//                 {Array.isArray(estado_activotipoCat.categorias) ? (
//                   <Select
//                     className={
//                       activotipocatego != "0" ? "Activated" : null
//                     }
//                     name="idActivoTipoCategoria"
//                     id="idActivoTipoCategoria"
//                     value={activotipocatego}
//                     onChange={manejadorActivoTipoCategoria}
//                   >
//                     <option key="0" value="0">
//                       -- Seleccionar --
//                     </option>
//                     {estado_activotipoCat.categorias
//                       .filter(
//                         (item) =>
//                           item.idActivoTipo === Number(activotipo)
//                       )
//                       .map((x) => (
//                         <option key={x.id} value={x.id}>
//                           {x.nombre}
//                         </option>
//                       ))}
//                   </Select>
//                 ) : null}
//               </DivSelect>
//             </DivInput>
//           </DivInputBox>

//           <h2>Detalles del activo</h2>

//           <DivInput>
//             <InputGroup
//               input_label={"Serial"}
//               input_type={"text"}
//               input_value={serial}
//               input_placeholder={"Serial"}
//               state_name={serial}
//               set_state_name={setSerial}
//               on_change={manejadorSerial}
//             />
//             <InputGroup
//               input_label={"Marca"}
//               input_type={"text"}
//               input_value={marca}
//               input_placeholder={"Marca"}
//               state_name={marca}
//               set_state_name={setMarca}
//               on_change={manejadorMarca}
//             />
//           </DivInput>
//           <DivInput>
//             <InputGroup
//               input_label={"Modelo"}
//               input_type={"text"}
//               input_value={modelo}
//               input_placeholder={"modelo"}
//               state_name={modelo}
//               set_state_name={setModelo}
//               on_change={manejadorModelo}
//             />
//             <InputGroup
//               input_label={"Color"}
//               input_type={"text"}
//               input_value={color}
//               input_placeholder={"Color"}
//               state_name={color}
//               set_state_name={setColor}
//               on_change={manejadorColor}
//             />
//           </DivInput>
//           <InputGroup
//             input_label={"Componentes"}
//             input_type={"text"}
//             input_value={componente}
//             input_placeholder={"Componentes"}
//             state_name={marca}
//             set_state_name={setComponente}
//             on_change={manejadorComponente}
//           />
//           <TextArea
//             input_label={"Observaciones"}
//             input_type={"text"}
//             input_value={observacion}
//             input_placeholder={"Observaciones"}
//             state_name={observacion}
//             set_state_name={setObservacion}
//             on_change={manejadorObservacion}
//           />

//           <ButtonContainer>
//             <Button onClick={manejadorLimpiar}>
//               <span>Limpiar</span>
//             </Button>
//             <Button primary onClick={manejadorSumit}>
//               <span>Limpiar</span>
//             </Button>
//           </ButtonContainer>
//         </div>
//         <div>
//           <h2>Compania: {compania}</h2>
//           <h2>Departamento: {departamento}</h2>
//           <h2>Unidad: {unidad}</h2>
//           <h2>Localidad: {localidad}</h2>
//           <h2>Activo Tipo: {activotipo}</h2>
//           <h2>Activo Categoria : {activotipocatego}</h2>
//           <h2>Marca: {marca}</h2>
//           <h2>Modelo: {modelo}</h2>
//           <h2>Color: {color}</h2>
//           <h2>Componente: {componente}</h2>
//           <h2>Serial: {serial}</h2>
//           <h2>Observacion : {observacion}</h2>
//         </div>
//       </DivRegistroActivo>
//       <br />
//     </ContentBody>
//   </Content>
// </Wrapper>;
