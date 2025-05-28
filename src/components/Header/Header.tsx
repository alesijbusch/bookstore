import React from "react";
import { Container } from "../../ui/base";
import {
  HeaderWrapper,
  IconInner,
  IconSearch,
  IconWrapper,
  SearchForm,
  StyledHeader,
  StyledLogo,
} from "./style";
import { Link, Route } from "react-router";
import { InputSearch } from "../InputSearch/InputSearch";
import { CartIcon, FavoritesIcon, UserIcon } from "../../assets";
import { ROUTE } from "../../routes/routes";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Link to={ROUTE.HOME}>
            <StyledLogo />
          </Link>
          <SearchForm>
            <InputSearch type="text" placeholder="Search" />
            <IconSearch />
          </SearchForm>
          <IconWrapper>
            <IconInner>
              <FavoritesIcon />
            </IconInner>
            <IconInner>
              <CartIcon />
            </IconInner>
            <IconInner>
              <UserIcon />
            </IconInner>
          </IconWrapper>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};
