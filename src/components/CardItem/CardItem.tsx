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

interface CardItemProps {
  book: Book;
}

export const CardItem = ({ book }: CardItemProps) => {
  return (
    <StyledCardItem>
      <CardImagesInner to="/">
        <CardImage src={book.image} />
      </CardImagesInner>
      <Title to="/">{book.title}</Title>
      <SubTitle>{book.subtitle}</SubTitle>
      <Price>{book.price}</Price>
    </StyledCardItem>
  );
};
