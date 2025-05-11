import styled from "styled-components";
import { ArrowNextIcon, ArrowPrevIcon } from "../../assets";
import { Color } from "../../ui/colors";
import { Link } from "react-router";

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BaseItem = styled.span`
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  padding: 5px 15px;
`;
const PaginationItem = styled(BaseItem).attrs({ as: Link })`
  color: ${Color.secondary};
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: ${Color.primary};
  }
`;
const ActiveItem = styled(BaseItem)`
  color: ${Color.primary};
`;

const PaginationBtn = styled(Link)`
  text-decoration: none;
  color: ${Color.primary};
  display: flex;
  align-items: center;
  transition: 0.3s;
  &:hover {
    color: ${Color.primaryLight};
  }
`;
const PaginationPrev = styled(PaginationBtn)`
  color: ${Color.primary};
`;
const PaginationBtnText = styled.span`
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin: 0 12px;
`;
const StyledArrowPrevIcon = styled(ArrowPrevIcon)``;
const StyledArrowNextIcon = styled(ArrowNextIcon)``;
const PaginationGroup = styled.div``;
export {
  StyledPagination,
  PaginationItem,
  PaginationBtn,
  PaginationPrev,
  ActiveItem,
  PaginationBtnText,
  StyledArrowPrevIcon,
  StyledArrowNextIcon,
  PaginationGroup,
};
