import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`
   ${reset}
   body {
     font-family: 'Manrope', sans-serif;
     font-style: normal;
     font-weight: 400;

   }
 `;
