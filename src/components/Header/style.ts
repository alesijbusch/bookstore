import styled from "styled-components";
import { Logo, SearchIcon } from "../../assets";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 24px 0;
  background: #fff;
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 72px;
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledLogo = styled(Logo)`
  width: 138px;
  /* height: 50px; */
`;
const SearchForm = styled.form`
  position: relative;
  width: 542px;
  transition: 0.3s all ease-in-out;
`;
const IconSearch = styled(SearchIcon)`
  position: absolute;
  right: 5px;
  top: 50%;
  margin-bottom: -50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
const IconInner = styled.div`
  padding: 15px;
  cursor: pointer;
`;
export {
  StyledHeader,
  StyledLogo,
  SearchForm,
  IconSearch,
  HeaderWrapper,
  IconWrapper,
  IconInner,
};
