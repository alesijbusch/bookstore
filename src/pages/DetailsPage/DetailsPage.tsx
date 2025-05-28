import React, { useEffect, useState } from "react";
import {
  DetailsBack,
  Details,
  DetailsTitle,
  DetailsMain,
  DetailsFavorites,
  DetailsInfo,
  DetailsPrice,
  DetailsInfoTop,
  DetailsAdditional,
  DetailsAdditionalItem,
  DetailsAdditionalLeft,
  DetailsAdditionalRight,
  Button,
  DetailsImagesInner,
  DetailsImages,
  DetailsTabs,
  DetailsTabsSections,
  DetailsTab,
  DetailsTabTitle,
  DetailsTabContent,
  DetailsTabText,
} from "./styles";
import { Container } from "../../ui/base";
import { useNavigate, useParams } from "react-router";
import { BookDetail } from "../../types/types";
import { ArrowBack, ImgNotFound } from "../../assets";

interface Tab {
  title: string;
  content: string;
}

export const DetailsPage = () => {
  const { isbn13 } = useParams<{ isbn13: string }>();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [book, setBook] = useState<BookDetail>();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/books/${isbn13}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, [isbn13]);

  const tabs: Tab[] = [
    {
      title: "Description",
      content: `${book?.desc}`,
    },
    { title: "Authors", content: `${book?.authors}` },
  ];

  return (
    <Container>
      <Details>
        <DetailsBack onClick={() => navigate(-1)}>
          <ArrowBack />
        </DetailsBack>
        <DetailsTitle>{book?.title}</DetailsTitle>
        <DetailsMain>
          <DetailsImagesInner>
            <DetailsImages
              src={book?.image || ImgNotFound}
              alt={book?.title || "Book cover"}
              title={book?.title}
            />
            <DetailsFavorites />
          </DetailsImagesInner>
          <DetailsInfo>
            <DetailsInfoTop>
              <DetailsPrice>{book?.price}</DetailsPrice>
            </DetailsInfoTop>
            <DetailsAdditional>
              <DetailsAdditionalItem>
                <DetailsAdditionalLeft>Authors</DetailsAdditionalLeft>
                <DetailsAdditionalRight>{book?.authors}</DetailsAdditionalRight>
              </DetailsAdditionalItem>
              <DetailsAdditionalItem>
                <DetailsAdditionalLeft>Publisher</DetailsAdditionalLeft>
                <DetailsAdditionalRight>
                  {book?.publisher}
                </DetailsAdditionalRight>
              </DetailsAdditionalItem>
            </DetailsAdditional>
            <Button type="button">add to cart</Button>
          </DetailsInfo>
        </DetailsMain>
        <DetailsTabsSections>
          <DetailsTabs>
            <DetailsTab>
              {tabs.map(({ title }, i) => {
                return (
                  <DetailsTabTitle
                    className={i === activeTab ? "active" : ""}
                    onClick={() => setActiveTab(i)}
                    key={title}
                  >
                    {title}
                  </DetailsTabTitle>
                );
              })}
            </DetailsTab>
            <DetailsTabContent>
              <DetailsTabText>{tabs[activeTab].content}</DetailsTabText>
            </DetailsTabContent>
          </DetailsTabs>
        </DetailsTabsSections>
      </Details>
    </Container>
  );
};
