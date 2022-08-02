import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { Provider } from 'mobx-react';
import GlobalStyle from './globalStyles';
import { WeatherProvider } from './hooks/useWeather';
import theme from './style/theme';
import Home from './pages/Home';
import store from './store';

ReactDOM.render(
  <Provider {...store}>
    <ThemeProvider theme={theme}>
      <WeatherProvider>
        <GlobalStyle />
        <ToastContainer />
        <Home />
      </WeatherProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
