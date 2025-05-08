import React, { InputHTMLAttributes } from "react";
import { StyledSearch } from "./style";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputSearch = (props: InputProps) => {
  return <StyledSearch {...props} />;
};
