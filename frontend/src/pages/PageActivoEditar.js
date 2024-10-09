import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Consola from "../components/Consola";
import { Content, ContentBody, ContentHead, Wrapper } from "../style/Content";
import ServicioDepartamento from "../services/ServicioDepartamento";
import ServicioLocalidad from "../services/ServicioLocalidad";
import ServicioUnidad from "../services/ServicioUnidad";
import ServicioActivoTipo from "../services/ServicioActivoTipo";
// import Console from "../components/Console";
import ServicioInformacion from "../services/ServicioInformacion";
import ServicioActivoTipoCategoria from "../services/ServicioActivoTipoCategoria";
import ServicioActivo from "../services/ServicioActivo";

import InputGroup from "../components/InputGroup";
import {
  Button,
  ButtonContainer,
  ContedorInput,
  DivInput,
  DivInputBox,
  DivRegistroActivo,
  DivSelect,
  Label,
  Select,
} from "../components/FormStyled";
import TextArea from "../components/TextArea";

import { useParams } from "react-router-dom";
import ServicioCondicion from "../services/ServicioCondicion";

const PageActivoEditar = function () {
  let { Id } = useParams();
  const navigate = useNavigate();
  // Campos del formulario
  const [compania, setCompania] = useState("0");
  const [departamento, setDepartamento] = useState(0);
  const [localidad, setLocalidad] = useState(0);
  const [unidad, setUnidad] = useState(0);
  const [activotipo, setActivoTipo] = useState(0);
  const [activotipocatego, setActivoTipoCatego] = useState(0);
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [color, setColor] = useState("");
  const [componente, setComponente] = useState("");
  const [serial, setSerial] = useState("");
  const [observacion, setObservacion] = useState("");
  const [codigo, setCodigo] = useState(0);
  const [asignado, setAsignado] = useState("");
  const [condicion, setCondicion] = useState("0");

  // Data desde la base de dato
  const [estado_activo, setEstado_Activo] = useState([]);
  const [estado_dato, setEstado_Dato] = useState([]);
  const [estado_departamento, setEstado_Departamento] = useState([]);
  const [estado_localidad, setEstado_Localidad] = useState([]);
  const [estado_unidad, setEstado_Unidad] = useState([]);
  const [estado_activotipos, setEstado_ActivoTipo] = useState([]);
  const [estado_activotipoCat, setEstado_activoCat] = useState([]);
  const [estado_condicion, setEstado_Condicion] = useState([]);

  // paginacion

  const ListarActivos = async () => {
    // Activo
    try {
      await ServicioActivo.ListarActivos().then((response) => {
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

  // const ListarUnidad = async () => {
  //   // Unidad
  //   try {
  //     await ServicioUnidad.ObtenerLista().then((response) => {
  //       setEstado_Unidad({ unidades: response.data });
  //     });
  //   } catch (error) {
  //   } finally {
  //   }
  // };

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
    ListarLocalidad();
    ListarActivoTipo();
    ListarActivoCategoria();
    ListarCondicion();

    try {
      await ServicioActivo.BuscarPorID(Id).then((response) => {
        const dataActivo = response.data;
        console.log(dataActivo);
        if (dataActivo.serial === null) {
          dataActivo.serial = "";
        }
        if (dataActivo.marca === null) {
          dataActivo.marca = "";
        }
        if (dataActivo.modelo === null) {
          dataActivo.modelo = "";
        }
        if (dataActivo.color === null) {
          dataActivo.color = "";
        }
        if (dataActivo.componentes === null) {
          dataActivo.componentes = "";
        }
        if (dataActivo.observaciones === null) {
          dataActivo.observaciones = "";
        }
        if (dataActivo.asignado === null) {
          dataActivo.asignado = "";
        }

        setCompania(dataActivo.idInformacion);
        setDepartamento(dataActivo.idDepartamento);
        setUnidad(dataActivo.idUnidad);
        setLocalidad(dataActivo.idLocalidad);
        setActivoTipo(dataActivo.idActivoTipo);
        setActivoTipoCatego(dataActivo.idActivoTipoCategoria);
        setSerial(dataActivo.serial);
        setMarca(dataActivo.marca);
        setModelo(dataActivo.modelo);
        setColor(dataActivo.color);
        setComponente(dataActivo.componentes);
        setObservacion(dataActivo.observaciones);
        setCodigo(dataActivo.idCodigo);
        setCondicion(dataActivo.idCondicion);
        setAsignado(dataActivo.asignado);
      });
    } catch (error) {
    } finally {
    }
  }

  useEffect(function () {
    JalarData();
  }, []);

  const manejadorActivoTipo = (e) => {
    setActivoTipo(e.target.value);
    setActivoTipoCatego(0);
  };

  const manejadorCompania = (e) => {
    setCompania(e.target.value);
  };

  const manejadorDepartamento = (e) => {
    setDepartamento(e.target.value);
  };

  const manejadorUnidad = (e) => {
    setUnidad(e.target.value);
  };

  const manejadorLocalidad = (e) => {
    setLocalidad(e.target.value);
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

  const manejadorCodigo = (e) => {
    setCodigo(e.target.value);
  };

  const manejadorCondicion = (e) => {
    setCondicion(e.target.value);
  };

  const manejadorAsignado = (e) => {
    setAsignado(e.target.value);
  };

  const manejadorSumit = function (e) {
    e.preventDefault();
    let formulario = {
      id: Id,
      idInformacion: compania,
      idDepartamento: departamento,
      idUnidad: unidad,
      idLocalidad: localidad,
      idActivoTipoCategoria: activotipocatego,
      marca: marca,
      modelo: modelo,
      color: color,
      componentes: componente,
      serial: serial,
      observaciones: observacion,
      idCondicion: condicion,
      asignado: asignado,
    };

    let Data = JSON.stringify(formulario);
    ServicioActivo.Actualizar(Id, Data);
    alert("Activo Actualizado");
  };

  // const manejadorLimpiar = () => {
  //   setCompania(0);
  //   setDepartamento(0);
  //   setUnidad(0);
  //   setLocalidad(0);
  //   setActivoTipo(0);
  //   setActivoTipoCatego(0);
  //   setMarca("");
  //   setColor("");
  //   setModelo("");
  //   setComponente("");
  //   setSerial("");
  //   setObservacion("");
  //   setCondicion(0);
  //   setAsignado("");
  // };

  return (
    <Wrapper>
      <Content>
        <ContentHead>{/* <Consola stateName={codigo} /> */}</ContentHead>
        <ContentBody>
          <DivRegistroActivo>
            <ContedorInput>
              <h1>Editar activo</h1>
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

                <DivInput>
                  {/* Localidad */}
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
                        className={activotipocatego != "0" ? "Activated" : null}
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
                  input_label={"Codigo de barra"}
                  input_type={"text"}
                  input_value={codigo}
                  input_placeholder={"Codigo de barra"}
                  state_name={codigo}
                  set_state_name={setCodigo}
                  on_change={manejadorCodigo}
                  isDisabled={true}
                />
              </DivInput>
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
              />
              <InputGroup
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
                input_name={"observacion"}
                input_type={"text"}
                input_value={observacion}
                input_placeholder={"Observaciones"}
                state_name={observacion}
                set_state_name={setObservacion}
                on_change={manejadorObservacion}
              />

              <ButtonContainer>
                {/* <Button onClick={manejadorLimpiar}>
                  <span>Limpiar</span>
                </Button> */}
                <Button primary onClick={() => navigate(-1)}>
                  <span>Volver</span>
                </Button>
                <Button primary onClick={manejadorSumit}>
                  <span>Actualizar</span>
                </Button>
              </ButtonContainer>
            </ContedorInput>
          </DivRegistroActivo>
          <br />
        </ContentBody>
      </Content>
    </Wrapper>
  );
};
export default PageActivoEditar;
