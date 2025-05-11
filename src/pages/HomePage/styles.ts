import styled from "styled-components";
import { Media } from "../../ui/media";
import { Color } from "../../ui/colors";

const HomeWrapper = styled.div`
  padding-top: 48px;
  padding-bottom: 72px;
  border-bottom: 1px solid ${Color.gray};
  ${Media.SM} {
    padding-top: 36px;
    padding-bottom: 56px;
  }
`;

export { HomeWrapper };
