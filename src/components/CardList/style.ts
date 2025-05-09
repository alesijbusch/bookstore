import styled from "styled-components";
import { Media } from "../../ui/media";

const StyledCardList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 48px 24px;
  ${Media.LG} {
    gap: 48px 24px;
    justify-content: space-around;
  }
  ${Media.MD} {
    justify-content: space-between;
  }
  ${Media.SM} {
    align-items: center;
    flex-direction: column;
  }
`;

export { StyledCardList };
