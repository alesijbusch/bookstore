import React from "react";
import { Content } from "../../ui/base";
import { Header } from "../../components/Header/Header";
import { Title } from "../../components/Title/Title";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Content>
        <Title>New Releases Books</Title>
      </Content>
    </div>
  );
};
