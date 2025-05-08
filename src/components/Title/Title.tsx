import React, { ReactNode } from "react";
import { StyledTitle } from "./style";
interface TitleProps {
  children: ReactNode;
}
export const Title = ({ children }: TitleProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};
