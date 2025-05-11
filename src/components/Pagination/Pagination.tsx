import React from "react";
import {
  ActiveItem,
  PaginationBtn,
  PaginationBtnText,
  PaginationGroup,
  PaginationItem,
  StyledArrowNextIcon,
  StyledArrowPrevIcon,
  StyledPagination,
} from "./styles";

export const Pagination = () => {
  return (
    <StyledPagination>
      <PaginationBtn to="/">
        <StyledArrowPrevIcon />
        <PaginationBtnText>Prev</PaginationBtnText>
      </PaginationBtn>
      <PaginationGroup>
        <PaginationItem to="/">1</PaginationItem>
        <ActiveItem>2</ActiveItem>
        <PaginationItem to="/">3</PaginationItem>
        <PaginationItem to="/">4</PaginationItem>
      </PaginationGroup>
      <PaginationBtn to="/">
        <PaginationBtnText>Next</PaginationBtnText>
        <StyledArrowNextIcon />
      </PaginationBtn>
    </StyledPagination>
  );
};
