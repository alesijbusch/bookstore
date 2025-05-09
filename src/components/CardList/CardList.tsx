import React from "react";
import { StyledCardList } from "./style";
import { CardItem } from "../CardItem/CardItem";
import { Book } from "../../types/types";

interface CardListProps {
  books: Book[];
}

export const CardList = ({ books }: CardListProps) => {
  return (
    <StyledCardList>
      {books.map((book) => {
        return <CardItem key={book.isbn13} book={book} />;
      })}
    </StyledCardList>
  );
};
