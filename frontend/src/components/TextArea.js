import {
  Area,
  InputGroupContainer,
  Label,
  WrapperInput,
} from "./FormStyled";

const TextArea = function ({
  input_label,
  input_type,
  input_placeholder,
  input_value,
  input_name,
  on_change,
  on_key_down,
}) {
  return (
    <InputGroupContainer>
      <Label>{input_label}</Label>
      <WrapperInput>
        <Area
          type={input_type}
          placeholder={input_placeholder}
          value={input_value}
          name={input_name}
          onChange={on_change}
          onKeyDown={on_key_down}
          className={!input_value ? "" : "Activated"}
          rows="3"
        />
      </WrapperInput>
      {/* <span>{errorMessage}</span> */}
    </InputGroupContainer>
  );
};
export default TextArea;
