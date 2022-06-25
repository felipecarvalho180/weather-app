import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import PermissionError from './components/error-toast';
import GlobalStyle from './globalStyles';
import App from './pages/home';
import store from './redux/store';
import theme from './style/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <PermissionError />
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
