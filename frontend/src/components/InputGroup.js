import {
  Input,
  Label,
  InputGroupContainer,
  WrapperInput,
} from "../components/FormStyled";

const InputGroup = function ({
  input_label,
  input_type,
  input_value,
  input_name,
  input_placeholder,
  on_change,
  on_key_down,
  isDisable,
  max_length,
  input_pattern,
  min,
  max,
  isDisabled,
}) {
  return (
    <InputGroupContainer>
      <Label>{input_label}</Label>
      <WrapperInput>
        <Input
          type={input_type}
          placeholder={input_placeholder}
          value={input_value}
          name={input_name}
          onChange={on_change}
          onKeyDown={on_key_down}
          className={!input_value ? "" : "Activated"}
          maxlength={max_length}
          pattern={input_pattern}
          min={min}
          max={max}
          disabled={isDisabled === true ? true : false}
          autoComplete="on"
        />
      </WrapperInput>
      {/* <span>{errorMessage}</span> */}
    </InputGroupContainer>
  );
};
export default InputGroup;
