// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Consola from "../components/Consola";
// import {
//   Content,
//   ContentBody,
//   ContentHead,
//   Wrapper,
// } from "../style/Content";

// // import Console from "../components/Console";
// import ServicioInformacion from "../services/ServicioInformacion";
// import ServicioActivo from "../services/ServicioActivo";

// import InputGroup from "../components/InputGroup";
// import {
//   Button,
//   ButtonContainer,
//   ButtonLink,
//   ContedorInput,
//   DivInput,
//   DivInputBox,
//   DivRegistroActivo,
//   DivRegistroInventario,
//   DivSelect,
//   Label,
//   Select,
// } from "../components/FormStyled";

// import { useParams } from "react-router-dom";
// import TextArea from "../components/TextArea";
// import DataTable from "react-data-table-component";
// import ServicioInventario from "../services/ServicioInventario";

// const PageInventarioHome = function () {
//   let { Id } = useParams();
//   const navigate = useNavigate();
//   // Campos del formulario
//   const [compania, setCompania] = useState("0");
//   const [nombre, setNombre] = useState();
//   const [observacion, setObservacion] = useState();
//   const [fechaCreacion, setFechaCreacion] = useState();
//   const [estado_dato, setEstado_Dato] = useState([]);
//   const [estado_activo, setEstado_Activo] = useState([]);
//   const [estado_inventario, setEstado_inventario] = useState([]);

//   const ListarCompanias = async () => {
//     // Informacion
//     try {
//       await ServicioInformacion.ObtenerLista().then((response) => {
//         setEstado_Dato({ companias: response.data });
//       });
//     } catch (error) {
//     } finally {
//     }
//   };

//   const ListarInventarios = async () => {
//     // Inventario
//     try {
//       await ServicioInventario.ObtenerLista().then((response) => {
//         setEstado_inventario({ inventarios: response.data });
//       });
//     } catch (error) {
//     } finally {
//     }
//   };

//   async function JalarData() {
//     ListarCompanias();
//     ListarInventarios();
//     try {
//       await ServicioActivo.BuscarPorID(Id).then((response) => {
//         const dataActivo = response.data;
//         // console.log(dataActivo);
//         if (dataActivo.serial === null) {
//           dataActivo.serial = "";
//         }
//         if (dataActivo.marca === null) {
//           dataActivo.marca = "";
//         }
//         if (dataActivo.modelo === null) {
//           dataActivo.modelo = "";
//         }
//         if (dataActivo.color === null) {
//           dataActivo.color = "";
//         }
//         if (dataActivo.componentes === null) {
//           dataActivo.componentes = "";
//         }
//         if (dataActivo.observaciones === null) {
//           dataActivo.observaciones = "";
//         }

//         setCompania(dataActivo.idInformacion);
//       });
//     } catch (error) {
//     } finally {
//     }
//   }

//   useEffect(function () {
//     JalarData();
//   }, []);

//   const manejadorCompania = (e) => {
//     setCompania(e.target.value);
//   };

//   const manejadorNombre = (e) => {
//     setNombre(e.target.value);
//   };

//   const manejadorObservacion = (e) => {
//     setObservacion(e.target.value);
//   };

//   // const manejadorInventario = (e) => {
//   //   set(e.target.value);
//   // };

//   const manejadorSumit = function (e) {
//     e.preventDefault();
//     let formulario = {
//       id: Id,
//       idInformacion: compania,
//     };

//     let Data = JSON.stringify(formulario);
//     ServicioActivo.Actualizar(Id, Data);
//     alert("Activo Actualizado");
//   };

//   const manejadorLimpiar = () => {
//     // setCompania(0);
//     // setDepartamento(0);
//     // setUnidad(0);
//     // setLocalidad(0);
//     // setActivoTipo(0);
//     // setActivoTipoCatego(0);
//     // setMarca("");
//     // setColor("");
//     // setModelo("");
//     // setComponente("");
//     // setSerial("");
//     // setObservacion("");
//     // setCantidad(1);
//   };

//   const customStyles = {
//     rows: {
//       style: {
//         minHeight: "72px", // override the row height
//       },
//     },
//     headCells: {
//       style: {
//         paddingLeft: "8px", // override the cell padding for head cells
//         paddingRight: "8px",
//       },
//     },
//     cells: {
//       style: {
//         paddingLeft: "8px", // override the cell padding for data cells
//         paddingRight: "8px",
//       },
//     },
//   };

//   const columnas = [
//     {
//       name: "ID",
//       selector: (row) => row.id,
//       sortable: true,
//     },
//     {
//       name: "Nombre",
//       selector: (row) => row.nombre,
//       sortable: true,
//       width: 100,
//       minWidth: 100,
//     },

//     {
//       // name: "Acción",
//       cell: (row) => (
//         <ButtonContainer>
//           <ButtonLink to={`/activo/editar/${row.id}`} btn="edititem">
//             <span>Editar</span>
//           </ButtonLink>
//         </ButtonContainer>
//       ),
//       style: {
//         padding: "0px",
//         marging: "0px",
//       },
//     },
//     {
//       // name: "Acción",
//       cell: (row) => (
//         <ButtonContainer>
//           <ButtonLink
//             to={`/activo/eliminar/${row.id}`}
//             btn="deleteitem"
//           >
//             <span>Eliminar</span>
//           </ButtonLink>
//         </ButtonContainer>
//       ),
//       style: {
//         padding: "0px",
//         marging: "0px",
//       },
//     },
//   ];

//   const paginacionOpciones = {
//     rowsPerPageText: "Filas por página",
//     rangeSeparatorText: "de",
//     selectAllRowsItem: true,
//     selectAllRowsItemText: "Todos",
//   };
//   return (
//     <Wrapper>
//       <Content>
//         <ContentHead>
//           {/* <Consola stateName={estado_inventario.inventarios} /> */}
//         </ContentHead>
//         <ContentBody>
//           <DivRegistroInventario>
//             <ContedorInput>
//               <h1>Crear inventario</h1>

//               {/* Companias */}
//               <DivSelect>
//                 <Label htmlFor="idInformacion">Compañia:</Label>
//                 {Array.isArray(estado_dato.companias) ? (
//                   <Select
//                     className={
//                       parseInt(compania) !== 0 ? "Activated" : null
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

//               <InputGroup
//                 input_label={"Nombre del inventario"}
//                 input_type={"text"}
//                 input_value={nombre}
//                 input_placeholder={"Nombre del inventario"}
//                 state_name={nombre}
//                 set_state_name={setNombre}
//                 on_change={manejadorNombre}
//               />

//               <TextArea
//                 input_label={"Observaciones"}
//                 input_type={"text"}
//                 input_value={observacion}
//                 input_placeholder={"Observaciones"}
//                 state_name={observacion}
//                 set_state_name={setObservacion}
//                 on_change={manejadorObservacion}
//               />

//               <ButtonContainer>
//                 {/* <Button onClick={manejadorLimpiar}>
//                   <span>Limpiar</span>
//                 </Button> */}
//                 <Button primary onClick={() => navigate(-1)}>
//                   <span>Volver</span>
//                 </Button>
//                 <Button primary onClick={manejadorSumit}>
//                   <span>Crear</span>
//                 </Button>
//               </ButtonContainer>
//             </ContedorInput>
//             <div>
//               <DataTable
//                 columns={columnas}
//                 data={estado_inventario.inventarios}
//                 // title="Activos registrados"
//                 pagination
//                 paginationComponentOptions={paginacionOpciones}
//                 customStyles={customStyles}
//               />
//             </div>
//           </DivRegistroInventario>
//           <br />
//         </ContentBody>
//       </Content>
//     </Wrapper>
//   );
// };
// export default PageInventarioHome;
