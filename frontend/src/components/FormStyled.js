import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const WrapperInput = styled.div`
  /* display: block; */
`;

export const DivRegistroActivo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
`;

export const DivRegistroInventario = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  width: 100%;
`;

//        LABEL
export const Label = styled.label`
  font-size: 14px;
  cursor: pointer;
  letter-spacing: 0.8px;
  color: black;
  font-family: "Inter";
  font-weight: 900;
`;

//        INPUT css
const InputCSS = css`
  margin-top: 2px;
  /* margin-bottom: 20px; */
  font-size: 14px;
  font-weight: normal;
  font-family: "Inter";
  letter-spacing: 0.3px;
  width: 100%;
  height: 35px;
  line-height: 40px;
  padding: 0px 5px 0px 10px;
  border: 1px solid #ccc;
  border-radius: 0px;
  transition: 0.3s ease all;
  border-radius: 3px;
  color: black;
  &:focus {
    outline: none;
    border: 1px solid #007bff;
  }

  &.Activated {
    border: 1px solid #007bff;
  }
`;
//        INPUT
export const Input = styled.input`
  ${InputCSS}
`;

//        Input Group
export const InputGroupContainer = styled.div`
  /* margin: 0px 0px; */
  /* position: relative; */
  width: 100%;
`;

export const CajaSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
`;

export const DivInput = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const DivInputBox = styled.div`
  margin-bottom: 10px;
`;

export const DivSelect = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: stretch;
  flex-direction: column;
`;

export const Select = styled.select`
  ${InputCSS}
`;

export const Area = styled.textarea`
  ${InputCSS}
  height:100%;
`;

// asdasdasd
//        Button Container
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  margin: 5px 0px;
`;

//        BaseButton
const ButtonStyled = css`
  font-size: 14px;
  cursor: pointer;
  letter-spacing: 1.5px;
  color: black;
  font-family: "Inter";
  font-weight: 600;
  margin-left: 10px;
  border: 1px solid #007bff;
  outline: none;
  padding: 10px 10px;
  border-radius: 4px;
  transition: 0.2s ease all;
  text-decoration: none;
  background-color: #007bff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: whitesmoke;
  span {
    margin: 0px;
    padding: 0px;
  }
`;

export const Button = styled.button`
  ${ButtonStyled}
  background: ${(props) => (props.primary ? "#007bff" : "white")};
  color: ${(props) => (props.primary ? "white" : "#007bff")};

  &:hover {
    opacity: 1;
  }
  &:active {
    opacity: 0.9;
    color: ${(props) => (props.primary ? "white" : "#00aea9")};
  }
`;

//        ButtonLink
export const ButtonLink = styled(Link)`
  ${ButtonStyled}
  border: initial;

  background: ${(props) =>
    props.btn === "edititem"
      ? "#007bff"
      : props.btn === "deleteitem"
      ? "#dc3545"
      : ""};
`;

// Icon On Button
export const IconOnButton = styled(Icon)`
  color: ${(props) =>
    props.xedit ? "#198754" : props.xdelete ? "#dc3545" : ""};
  width: 20px;
  height: 20px;
`;

export const ContedorInput = styled.div`
  /* border: solid 3px red; */
  padding: 0px 20px;
`;
