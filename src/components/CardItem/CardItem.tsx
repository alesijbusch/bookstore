import React from "react";
import {
  CardImage,
  CardImagesInner,
  Price,
  StyledCardItem,
  SubTitle,
  Title,
} from "./styles";
// import { Card } from "../../assets";
import { Book } from "../../types/types";
import { generatePath } from "react-router";
import { ROUTE } from "../../routes/routes";

interface CardItemProps {
  book: Book;
}

export const CardItem = ({ book }: CardItemProps) => {
  return (
    <StyledCardItem to={generatePath(ROUTE.DETAILS, { isbn13: book.isbn13 })}>
      <CardImagesInner>
        <CardImage src={book.image} />
      </CardImagesInner>
      <Title>{book.title}</Title>
      <SubTitle>{book.subtitle}</SubTitle>
      <Price>{book.price}</Price>
    </StyledCardItem>
  );
};
