import React from "react";
import { Content } from "../../ui/base";
import {
  HeaderWrapper,
  IconInner,
  IconSearch,
  IconWrapper,
  SearchForm,
  StyledHeader,
  StyledLogo,
} from "./style";
import { Link } from "react-router";
import { InputSearch } from "../InputSearch/InputSearch";
import { CartIcon, FavoritesIcon, UserIcon } from "../../assets";

export const Header = () => {
  return (
    <StyledHeader>
      <Content>
        <HeaderWrapper>
          <Link to="/">
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
      </Content>
    </StyledHeader>
  );
};
