import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './globalStyles';
import { GeocodeProvider } from './hooks/useGeocode';
import { WeatherProvider } from './hooks/useWeather';
import theme from './style/theme';
import Home from './pages/Home';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GeocodeProvider>
      <WeatherProvider>
        <GlobalStyle />
        <ToastContainer />
        <Home />
      </WeatherProvider>
    </GeocodeProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
