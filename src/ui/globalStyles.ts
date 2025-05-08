import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { Color } from "./colors";

export const GlobalStyles = createGlobalStyle`
   ${reset}
   body {
     font-family: 'Manrope', sans-serif;
     font-style: normal;
     font-weight: 400;
     color: ${Color.primary};
   }
 `;
