import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledSearch = styled.input`
  width: 100%;
  padding: 19px 45px 19px 19px;
  outline: none;
  border: 1px solid ${Color.gray};
  color: ${Color.primary};
  ::placeholder {
    color: ${Color.secondary};
  }
`;

export { StyledSearch };
