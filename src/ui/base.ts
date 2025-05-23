import styled from "styled-components";
import { Media } from "./media";

const Container = styled.div`
  margin: 0 auto;
  width: 1120px;
  ${Media.LG} {
    width: 928px;
  }
  ${Media.MD} {
    width: 688px;
  }
  ${Media.SM} {
    width: 540px;
  }
  ${Media.XS} {
    width: 100%;
    margin: 0 24px;
  }
`;
export { Container };
