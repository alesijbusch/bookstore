import React, { useEffect, useState } from "react";
import { Container } from "../../ui/base";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";
import { HomeWrapper } from "./styles";
import { CardList } from "../../components/CardList/CardList";
import { Book } from "../../types/types";
import { Pagination } from "../../components/Pagination/Pagination";

export const HomePage = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/js")
      .then((response) => response.json())
      .then(({ books }) => setBooks(books));
  }, [books]);

  return (
    <div>
      <Header />
      <Container>
        <Title>New Releases Books</Title>

        <HomeWrapper>
          <CardList books={books} />
        </HomeWrapper>
        <HomeWrapper>
          <Pagination />
        </HomeWrapper>
      </Container>
    </div>
  );
};
