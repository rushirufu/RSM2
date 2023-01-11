import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Console from "../components/Consola";
import ServicioActivoActualizar from "../services/ServicioActivo";

import {
  Content,
  ContentBody,
  ContentHead,
  Wrapper,
} from "../style/Content";
import ServicioDepartamento from "../services/ServicioDepartamento";
import ServicioLocalidad from "../services/ServicioLocalidad";
import ServicioUnidad from "../services/ServicioUnidad";
import ServicioActivoTipo from "../services/ServicioActivoTipo";
import ServicioInformacion from "../services/ServicioInformacion";
import ServicioActivoTipoCategoria from "../services/ServicioActivoTipoCategoria";
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
import Consola from "../components/Consola";
import ServicioActivo from "../services/ServicioActivo";

const PageActivoEditar = function () {
  let { Id } = useParams();

  // Campos del formulario
  const [state, setState] = useState({});
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

  async function JalarData() {
    try {
      await ServicioActivo.BuscarPorID(Id).then((response) => {
        const dataActivo = response.data;
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
        setSerial(dataActivo.serial);
        setMarca(dataActivo.marca);
        setModelo(dataActivo.modelo);
        setColor(dataActivo.color);
        setComponente(dataActivo.componentes);
        setObservacion(dataActivo.observaciones);
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
    console.log(compania);
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

  const manejadorSumit = function (e) {
    e.preventDefault();

    if (compania === 0) {
    }

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
      observaciones: observacion,
    };

    let Data = JSON.stringify(formulario);
    ServicioActivo.Actualizar(Data);
  };

  return (
    <>
      {/* <Consola stateName={observacion} /> */}
      <Wrapper>
        <Content>
          <ContentHead>
            <h1>EDITAR</h1>
          </ContentHead>
          <ContentBody>
            <DivRegistroActivo>
              <ContedorInput>
                <h2>Datos del activo</h2>
                <DivInputBox>
                  <DivInput>
                    {/* cantidad */}
                    <InputGroup
                      input_label={"Número de activos"}
                      input_type={"number"}
                      input_value={cantidad}
                      input_placeholder={"Número de activos"}
                      state_name={cantidad}
                      set_state_name={setCantidad}
                      on_change={manejadorCantidad}
                      max="3"
                      min="1"
                      input_pattern={"[0-9.]+"}
                      isRequired={"required"}
                    />
                  </DivInput>
                  <DivInput>
                    {/* Companias */}
                    <DivSelect>
                      <Label htmlFor="idInformacion">Compañia:</Label>
                      {Array.isArray(estado_dato.companias) ? (
                        <Select
                          className={
                            parseInt(compania) !== 0
                              ? "Activated"
                              : null
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
                      <Label htmlFor="idDepartamento">
                        Departamento:
                      </Label>
                      {Array.isArray(
                        estado_departamento.departamentos
                      ) ? (
                        <Select
                          className={
                            departamento != "0" ? "Activated" : null
                          }
                          name="idDepartamento"
                          id="idDepartamento"
                          value={departamento}
                          onChange={manejadorDepartamento}
                        >
                          <option key="0" value="0">
                            -- Seleccionar --
                          </option>
                          {estado_departamento.departamentos.map(
                            (x) => (
                              <option key={x.id} value={x.id}>
                                {x.nombre}
                              </option>
                            )
                          )}
                        </Select>
                      ) : null}
                    </DivSelect>
                  </DivInput>

                  <DivInput>
                    {/* Unidad */}
                    <DivSelect>
                      <Label htmlFor="idUnidad">Unidad:</Label>
                      {Array.isArray(estado_unidad.unidades) ? (
                        <Select
                          className={
                            unidad != "0" ? "Activated" : null
                          }
                          name="idUnidad"
                          id="idUnidad"
                          value={unidad}
                          onChange={manejadorUnidad}
                        >
                          <option key="0" value="0">
                            -- Seleccionar --
                          </option>
                          {estado_unidad.unidades.map((x) => (
                            <option key={x.id} value={x.id}>
                              {x.nombre}
                            </option>
                          ))}
                        </Select>
                      ) : null}
                    </DivSelect>
                    {/* Localidad */}
                    <DivSelect>
                      <Label htmlFor="idLocalidad">Localidad:</Label>
                      {Array.isArray(estado_localidad.localidades) ? (
                        <Select
                          className={
                            localidad != "0" ? "Activated" : null
                          }
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
                      <Label htmlFor="activotipo">
                        Tipo de activo:
                      </Label>
                      {Array.isArray(
                        estado_activotipos.activoTipos
                      ) ? (
                        <Select
                          className={
                            activotipo != "0" ? "Activated" : null
                          }
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
                      <Label htmlFor="idActivoTipoCategoria">
                        Categoría:
                      </Label>
                      {Array.isArray(
                        estado_activotipoCat.categorias
                      ) ? (
                        <Select
                          className={
                            activotipocatego != "0"
                              ? "Activated"
                              : null
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
                              (item) =>
                                item.idActivoTipo ===
                                Number(activotipo)
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
                <InputGroup
                  input_label={"Componentes"}
                  // input_name={"componente"}
                  input_type={"text"}
                  input_value={componente}
                  input_placeholder={"Componentes"}
                  state_name={componente}
                  set_state_name={setComponente}
                  on_change={manejadorComponente}
                />
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
                <h2>Detalles del activo</h2>
                <DivInput>
                  <InputGroup
                    input_label={"Serial"}
                    input_name={"serial"}
                    input_type={"text"}
                    input_placeholder={"Serial"}
                    input_value={serial}
                    state_name={serial}
                    set_state_name={setSerial}
                    on_change={manejadorSerial}
                    isDisable={false}
                  />
                  <InputGroup
                    input_label={"Marca"}
                    input_name={"marca"}
                    input_type={"text"}
                    input_placeholder={"Marca"}
                    input_value={marca}
                    state_name={marca}
                    set_state_name={setMarca}
                    on_change={manejadorMarca}
                    isDisable={false}
                  />
                </DivInput>
                <DivInput>
                  <InputGroup
                    input_label={"Modelo"}
                    input_name={"modelo"}
                    input_type={"text"}
                    input_placeholder={"Modelo"}
                    input_value={modelo}
                    state_name={modelo}
                    set_state_name={setModelo}
                    on_change={manejadorModelo}
                    isDisable={false}
                  />
                  <InputGroup
                    input_label={"Color"}
                    input_name={"color"}
                    input_type={"text"}
                    input_placeholder={"Color"}
                    input_value={color}
                    state_name={color}
                    set_state_name={setColor}
                    on_change={manejadorColor}
                    isDisable={false}
                  />
                </DivInput>
                <InputGroup
                  input_label={"Componentes"}
                  input_name={"componente"}
                  input_type={"text"}
                  input_placeholder={"Componentes"}
                  input_value={componente}
                  state_name={componente}
                  set_state_name={setComponente}
                  on_change={manejadorComponente}
                  isDisable={false}
                />
                <TextArea
                  input_label={"Observaciones"}
                  input_name={"observacion"}
                  input_type={"text"}
                  input_placeholder={"Observaciones"}
                  input_value={observacion}
                  state_name={observacion}
                  set_state_name={setObservacion}
                  on_change={manejadorObservacion}
                />

                {/* <ButtonContainer>
                  <Button onClick={manejadorLimpiar}>
                    <span>Limpiar</span>
                  </Button>
                  <Button primary onClick={manejadorSumit}>
                    <span>Registrar</span>
                  </Button>
                </ButtonContainer> */}
              </div>
            </DivRegistroActivo>
            <br />
          </ContentBody>
        </Content>
      </Wrapper>
    </>
  );
};
export default PageActivoEditar;
