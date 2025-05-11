import styled from "styled-components";
import { Media } from "../../ui/media";

const StyledFooter = styled.footer`
  padding: 35px 0;
`;
const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Media.XS} {
    flex-direction: column;
  }
`;
const FooterItem = styled.div`
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  ${Media.XS} {
    &:first-child {
      margin-bottom: 20px;
    }
  }
`;

export { StyledFooter, FooterWrapper, FooterItem };
