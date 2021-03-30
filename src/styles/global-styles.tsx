import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  * {
    box-sizing: border-box;
  }

  html, body {
    font-size: 1em;
  }

  body {
    background-color: ${({ theme: { colors } }) => colors.grayLight};
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

export default GlobalStyles;
