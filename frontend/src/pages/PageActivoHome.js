import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Consola from "../components/Consola";
import { Content, ContentBody, ContentHead, Wrapper } from "../style/Content";
import ServicioDepartamento from "../services/ServicioDepartamento";
import ServicioLocalidad from "../services/ServicioLocalidad";
import ServicioUnidad from "../services/ServicioUnidad";
import ServicioActivoTipo from "../services/ServicioActivoTipo";
import ServicioArea from "../services/ServicioArea";

// import Console from "../components/Console";
import ServicioInformacion from "../services/ServicioInformacion";
import ServicioActivoTipoCategoria from "../services/ServicioActivoTipoCategoria";
import ServicioActivo from "../services/ServicioActivo";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "../components/DataTableStyled";
import InputGroup from "../components/InputGroup";
import {
  Button,
  ButtonContainer,
  ButtonLink,
  ContedorInput,
  DivInput,
  DivInputBox,
  DivRegistroActivo,
  DivSelect,
  IconOnButton,
  Label,
  Select,
} from "../components/FormStyled";
import TextArea from "../components/TextArea";
import Pagination from "../components/Pagination";
import { customStyles } from "../components/DataTable";
import ServicioCondicion from "../services/ServicioCondicion";

const PageActivoHome = function () {
  // Campos del formulario
  const [compania, setCompania] = useState("0");
  const [departamento, setDepartamento] = useState(0);
  const [localidad, setLocalidad] = useState(0);
  const [area, setArea] = useState(0);
  const [unidad, setUnidad] = useState(0);
  const [activotipo, setActivoTipo] = useState(0);
  const [activotipocatego, setActivoTipoCatego] = useState(0);
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [color, setColor] = useState("");
  const [componente, setComponente] = useState("");
  const [serial, setSerial] = useState("");
  const [observacion, setObservacion] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [asignado, setAsignado] = useState("");
  const [condicion, setCondicion] = useState(1);

  // Data desde la base de dato
  const [estado_activo, setEstado_Activo] = useState([]);
  const [estado_dato, setEstado_Dato] = useState([]);
  const [estado_departamento, setEstado_Departamento] = useState([]);
  const [estado_localidad, setEstado_Localidad] = useState([]);
  const [estado_unidad, setEstado_Unidad] = useState([]);
  const [estado_activotipos, setEstado_ActivoTipo] = useState([]);
  const [estado_activotipoCat, setEstado_activoCat] = useState([]);
  const [estado_condicion, setEstado_Condicion] = useState([]);
  const [estado_area, setEstado_Area] = useState([]);

  // state
  const [state, setState] = useState();

  const ListarActivos = async () => {
    // Activo
    try {
      await ServicioActivo.ListarActivos().then((response) => {
        console.log(response.data);
        setEstado_Activo({ activos: response.data });
      });
    } catch (error) {
    } finally {
    }
  };
  const ListarCompanias = async () => {
    // Informacion
    try {
      await ServicioInformacion.ObtenerLista().then((response) => {
        setEstado_Dato({ companias: response.data });
      });
    } catch (error) {
    } finally {
    }
  };

  const ListarDepartamentos = async () => {
    // Departamentos
    try {
      await ServicioDepartamento.ObtenerLista().then((response) => {
        setEstado_Departamento({ departamentos: response.data });
      });
    } catch (error) {
    } finally {
    }
  };

  const ListarUnidad = async () => {
    // Unidad
    try {
      await ServicioUnidad.ObtenerLista().then((response) => {
        setEstado_Unidad({ unidades: response.data });
      });
    } catch (error) {
    } finally {
    }
  };

  const ListarLocalidad = async () => {
    // Localidad
    try {
      await ServicioLocalidad.ObtenerLista().then((response) => {
        setEstado_Localidad({ localidades: response.data });
      });
    } catch (error) {
    } finally {
    }
  };

  const ListarAreas = async () => {
    // areas
    try {
      await ServicioArea.ObtenerLista().then((response) => {
        setEstado_Area({ areas: response.data });
      });
    } catch (error) {
    } finally {
    }
  };

  const ListarActivoTipo = async () => {
    // ActivoTipo
    try {
      await ServicioActivoTipo.ObtenerLista().then((response) => {
        setEstado_ActivoTipo({ activoTipos: response.data });
      });
    } catch (error) {
    } finally {
    }
  };

  const ListarActivoCategoria = async () => {
    // ActivoTipo Categoria
    try {
      await ServicioActivoTipoCategoria.ObtenerLista().then((response) => {
        setEstado_activoCat({ categorias: response.data });
      });
    } catch (error) {
    } finally {
    }
  };

  const ListarCondicion = async () => {
    // Condicion
    try {
      await ServicioCondicion.ObtenerLista().then((response) => {
        setEstado_Condicion({ condiciones: response.data });
      });
    } catch (error) {
    } finally {
    }
  };

  async function JalarData() {
    ListarActivos();
    ListarCompanias();
    ListarDepartamentos();
    ListarUnidad();
    ListarLocalidad();
    ListarActivoTipo();
    ListarActivoCategoria();
    ListarCondicion();
    ListarAreas();
  }

  useEffect(function () {
    JalarData();
  }, []);

  const manejadorActivoTipo = (e) => {
    setActivoTipo(e.target.value);
    setActivoTipoCatego(0);
  };

  const manejadorCompania = (e) => {
    console.log(compania);
    setCompania(e.target.value);
  };

  const manejadorDepartamento = (e) => {
    setDepartamento(e.target.value);
  };

  const manejadorLocalidad = (e) => {
    setLocalidad(e.target.value);
  };

  const manejadorArea = (e) => {
    setArea(e.target.value);
  };

  const manejadorActivoTipoCategoria = (e) => {
    setActivoTipoCatego(e.target.value);
  };

  const manejadorMarca = (e) => {
    setMarca(e.target.value);
  };

  const manejadorModelo = (e) => {
    setModelo(e.target.value);
  };

  const manejadorColor = (e) => {
    setColor(e.target.value);
  };

  const manejadorComponente = (e) => {
    setComponente(e.target.value);
  };

  const manejadorSerial = (e) => {
    setSerial(e.target.value.toUpperCase());
  };

  const manejadorObservacion = (e) => {
    setObservacion(e.target.value);
  };

  const manejadorAsignado = (e) => {
    setAsignado(e.target.value);
  };

  const manejadorCondicion = (e) => {
    setCondicion(e.target.value);
  };

  const validacionFormulario = () => {
    if (true) {
    }
  };

  const manejadorSumit = function (e) {
    e.preventDefault();
    let formulario = {
      idinformacion: compania,
      iddepartamento: departamento,
      idunidad: unidad,
      Idlocalidad: localidad,
      IdactivoTipoCategoria: activotipocatego,
      marca: marca,
      modelo: modelo,
      color: color,
      componentes: componente,
      serial: serial,
      asignado: asignado,
      observaciones: observacion,
      cantidad: cantidad,
      idCondicion: condicion,
      idArea: area,
    };

    let Data = JSON.stringify(formulario);
    ServicioActivo.Crear(Data);
    ListarActivos();
    alert("Activo registrado exitosamente");
    ListarActivos();
  };

  const manejadorLimpiar = () => {
    setCompania(0);
    setDepartamento(0);
    setUnidad(0);
    setLocalidad(0);
    setActivoTipo(0);
    setActivoTipoCatego(0);
    setMarca("");
    setColor("");
    setModelo("");
    setComponente("");
    setSerial("");
    setObservacion("");
    setCantidad(1);
    setArea(0);
  };

  const columnas = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Codigo",
      selector: (row) => row.idCodigo,
      sortable: true,
    },
    {
      name: "Marca",
      selector: (row) => row.marca,
      sortable: true,
    },

    {
      name: "Modelo",
      selector: (row) => row.modelo,
      sortable: true,
    },

    {
      // name: "Acción",
      cell: (row) => (
        <ButtonContainer>
          <ButtonLink to={`/activo/editar/${row.id}`} btn="edititem">
            <span>Editar</span>
          </ButtonLink>
        </ButtonContainer>
      ),
      style: {
        padding: "0px",
        marging: "0px",
      },
    },
    {
      // name: "Acción",
      cell: (row) => (
        <ButtonContainer>
          <ButtonLink to={`/activo/eliminar/${row.id}`} btn="deleteitem">
            <span>Eliminar</span>
          </ButtonLink>
        </ButtonContainer>
      ),
      style: {
        padding: "0px",
        marging: "0px",
      },
    },
  ];

  const paginacionOpciones = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  return (
    <Wrapper>
      <Content>
        <ContentHead>
          {/* <Consola stateName={estado_activotipoCat.categorias} /> */}
        </ContentHead>
        <ContentBody>
          <form action="post">
            <DivRegistroActivo>
              <ContedorInput>
                <h1>Nuevo Activo</h1>
                <h2>Datos del activo</h2>

                <DivInputBox>
                  <DivInput>
                    {/* Companias */}
                    <DivSelect>
                      <Label htmlFor="idInformacion">Compañia:</Label>
                      {Array.isArray(estado_dato.companias) ? (
                        <Select
                          className={
                            parseInt(compania) !== 0 ? "Activated" : null
                          }
                          name="idInformacion"
                          id="idInformacion"
                          value={compania}
                          onChange={manejadorCompania}
                        >
                          <option key="0" value="0">
                            -- Seleccionar --
                          </option>
                          {estado_dato.companias.map((x) => (
                            <option key={x.id} value={x.id}>
                              {x.alias}
                            </option>
                          ))}
                        </Select>
                      ) : null}
                    </DivSelect>
                    {/* Departamentos */}
                    <DivSelect>
                      <Label htmlFor="idDepartamento">Departamento:</Label>
                      {Array.isArray(estado_departamento.departamentos) ? (
                        <Select
                          className={departamento != "0" ? "Activated" : null}
                          name="idDepartamento"
                          id="idDepartamento"
                          value={departamento}
                          onChange={manejadorDepartamento}
                        >
                          <option key="0" value="0">
                            -- Seleccionar --
                          </option>
                          {estado_departamento.departamentos.map((x) => (
                            <option key={x.id} value={x.id}>
                              {x.nombre}
                            </option>
                          ))}
                        </Select>
                      ) : null}
                    </DivSelect>
                  </DivInput>

                  {/* Localidad */}
                  <DivInput>
                    <DivSelect>
                      <Label htmlFor="idLocalidad">Localidad:</Label>
                      {Array.isArray(estado_localidad.localidades) ? (
                        <Select
                          className={localidad != "0" ? "Activated" : null}
                          name="idLocalidad"
                          id="idLocalidad"
                          value={localidad}
                          onChange={manejadorLocalidad}
                        >
                          <option key="0" value="0">
                            -- Seleccionar --
                          </option>
                          {estado_localidad.localidades.map((x) => (
                            <option key={x.id} value={x.id}>
                              {x.nombre}
                            </option>
                          ))}
                        </Select>
                      ) : null}
                    </DivSelect>

                    {/* area */}
                    <DivSelect>
                      <Label htmlFor="idArea">Area:</Label>
                      {Array.isArray(estado_area.areas) ? (
                        <Select
                          className={area != "0" ? "Activated" : null}
                          name="idArea"
                          id="idArea"
                          value={area}
                          onChange={manejadorArea}
                        >
                          <option key="0" value="0">
                            -- Seleccionar --
                          </option>
                          {estado_area.areas.map((x) => (
                            <option key={x.id} value={x.id}>
                              {x.nombre}
                            </option>
                          ))}
                        </Select>
                      ) : null}
                    </DivSelect>
                  </DivInput>
                  <DivInput>
                    {/* Activo Tipo */}
                    <DivSelect>
                      <Label htmlFor="activotipo">Tipo de activo:</Label>
                      {Array.isArray(estado_activotipos.activoTipos) ? (
                        <Select
                          className={activotipo != "0" ? "Activated" : null}
                          name="activotipo"
                          id="activotipo"
                          value={activotipo}
                          onChange={manejadorActivoTipo}
                        >
                          <option key="0" value="0">
                            -- Seleccionar --
                          </option>
                          {estado_activotipos.activoTipos.map((x) => (
                            <option key={x.id} value={x.id}>
                              {x.nombre}
                            </option>
                          ))}
                        </Select>
                      ) : null}
                    </DivSelect>
                    {/* Activo Tipo Categoria */}
                    <DivSelect>
                      <Label htmlFor="idActivoTipoCategoria">Categoría:</Label>
                      {Array.isArray(estado_activotipoCat.categorias) ? (
                        <Select
                          className={
                            activotipocatego != "0" ? "Activated" : null
                          }
                          name="idActivoTipoCategoria"
                          id="idActivoTipoCategoria"
                          value={activotipocatego}
                          onChange={manejadorActivoTipoCategoria}
                        >
                          <option key="0" value="0">
                            -- Seleccionar --
                          </option>
                          {estado_activotipoCat.categorias
                            .filter(
                              (item) => item.idActivoTipo === Number(activotipo)
                            )
                            .map((x) => (
                              <option key={x.id} value={x.id}>
                                {x.nombre}
                              </option>
                            ))}
                        </Select>
                      ) : null}
                    </DivSelect>
                  </DivInput>
                </DivInputBox>

                <h2>Detalles del activo</h2>

                <DivInput>
                  <InputGroup
                    input_label={"Serial"}
                    input_type={"text"}
                    input_value={serial}
                    input_placeholder={"Serial"}
                    state_name={serial}
                    set_state_name={setSerial}
                    on_change={manejadorSerial}
                  />
                  <InputGroup
                    input_label={"Marca"}
                    input_type={"text"}
                    input_value={marca}
                    input_placeholder={"Marca"}
                    state_name={marca}
                    set_state_name={setMarca}
                    on_change={manejadorMarca}
                  />
                </DivInput>
                <DivInput>
                  <InputGroup
                    input_label={"Modelo"}
                    input_type={"text"}
                    input_value={modelo}
                    input_placeholder={"modelo"}
                    state_name={modelo}
                    set_state_name={setModelo}
                    on_change={manejadorModelo}
                  />
                  <InputGroup
                    input_label={"Color"}
                    input_type={"text"}
                    input_value={color}
                    input_placeholder={"Color"}
                    state_name={color}
                    set_state_name={setColor}
                    on_change={manejadorColor}
                  />
                </DivInput>

                {/*condicion */}
                <DivSelect>
                  <Label htmlFor="condicion">Condición:</Label>
                  {Array.isArray(estado_condicion.condiciones) ? (
                    <Select
                      className={condicion != "0" ? "Activated" : null}
                      name="condicion"
                      id="condicion"
                      value={condicion}
                      onChange={manejadorCondicion}
                    >
                      <option key="0" value="0">
                        -- Seleccionar --
                      </option>
                      {estado_condicion.condiciones.map((x) => (
                        <option key={x.id} value={x.id}>
                          {x.nombre}
                        </option>
                      ))}
                    </Select>
                  ) : null}
                </DivSelect>
                {/* <InputGroup
                  input_label={"Asignado a"}
                  input_name={"asignado"}
                  input_type={"text"}
                  input_value={asignado}
                  input_placeholder={"Asignado a"}
                  state_name={asignado}
                  set_state_name={setAsignado}
                  on_change={manejadorAsignado}
                /> */}

                {/* <InputGroup
                  input_label={"Componentes"}
                  input_name={"componente"}
                  input_type={"text"}
                  input_value={componente}
                  input_placeholder={"Componentes"}
                  state_name={componente}
                  set_state_name={setComponente}
                  on_change={manejadorComponente}
                /> */}
                <TextArea
                  input_label={"Observaciones"}
                  input_type={"text"}
                  input_value={observacion}
                  input_placeholder={"Observaciones"}
                  state_name={observacion}
                  set_state_name={setObservacion}
                  on_change={manejadorObservacion}
                />

                <ButtonContainer>
                  <Button onClick={manejadorLimpiar}>
                    <span>Limpiar</span>
                  </Button>
                  <Button primary onClick={manejadorSumit}>
                    <span>Crear</span>
                  </Button>
                </ButtonContainer>
              </ContedorInput>
              <div>
                <DataTable
                  columns={columnas}
                  data={estado_activo.activos}
                  // title="Activos registrados"
                  pagination
                  paginationComponentOptions={paginacionOpciones}
                  customStyles={customStyles}
                />
              </div>
            </DivRegistroActivo>
            <br />
          </form>
        </ContentBody>
      </Content>
    </Wrapper>
  );
};
export default PageActivoHome;
