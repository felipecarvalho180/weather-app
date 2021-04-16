import { createGlobalStyle } from 'styled-components';
import { BACKGROUND_COLOR } from './style/colors';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${BACKGROUND_COLOR};
  }
`;

export default GlobalStyle;
