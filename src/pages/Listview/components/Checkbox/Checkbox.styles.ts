import styled from "styled-components";
import { colors } from "styles";

type CheckboxProps = {
  checked: boolean;
};

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
`;

export const StyledCheckbox = styled.div<CheckboxProps>`
  display: inline-block;
  width: 25px;
  height: 25px;
  background: ${(props) => (props.checked ? colors.primary : "none")};
  border: 3px solid ${colors.primary};
  border-radius: 25px;
  transition: all 100ms;
`;

