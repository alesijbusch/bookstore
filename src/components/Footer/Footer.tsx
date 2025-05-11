import React from "react";
import { FooterItem, FooterWrapper, StyledFooter } from "./styles";
import { Container } from "../../ui/base";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterWrapper>
          <FooterItem>©2022 Bookstore</FooterItem>
          <FooterItem>All rights reserved</FooterItem>
        </FooterWrapper>
      </Container>
    </StyledFooter>
  );
};
