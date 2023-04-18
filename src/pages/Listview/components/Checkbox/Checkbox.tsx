import * as C from './Checkbox.styles'


type CheckboxProps = {
  checked: boolean;
};

const Checkbox = ({ checked}: CheckboxProps) => {
  return (
    <C.CheckboxContainer>
      <C.StyledCheckbox checked={checked} />
    </C.CheckboxContainer>
  );
};

export default Checkbox;
