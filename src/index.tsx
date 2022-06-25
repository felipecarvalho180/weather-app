import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import { GeocodeProvider } from './hooks/useGeocode';
import { WeatherProvider } from './hooks/useWeather';
import App from './pages/home';
import theme from './style/theme';
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GeocodeProvider>
      <WeatherProvider>
        <GlobalStyle />
        <ToastContainer />
        <App />
      </WeatherProvider>
    </GeocodeProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);
