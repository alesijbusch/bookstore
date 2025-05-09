import { css } from "styled-components";
import { Media } from "./media";

///Manrope = Helios
///Barlow = Bebas Neue
///Inter = DIN Pro

const H1 = css`
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  ${Media.XS} {
    font-size: 32px;
  }
`;
const H2 = css`
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  ${Media.XS} {
    font-size: 28px;
  }
`;
const H3 = css`
  font-family: "Bebas Neue", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
`;
const S1 = css`
  font-family: "Manrope", sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
`;
const B1 = css`
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
`;
const B2 = css`
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const Typography = { H1, H2, H3, S1, B1, B2 };
