import { createGlobalStyle } from 'styled-components';
import { BACKGROUND_COLOR } from './style/colors';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;700&display=swap');

  body {
    margin: 0;
    padding: 0;
    background: ${BACKGROUND_COLOR};
    font-family: 'Work Sans', sans-serif;
    overflow: hidden;
  }
`;

export default GlobalStyle;
