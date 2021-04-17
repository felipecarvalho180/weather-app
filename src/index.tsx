import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PermissionError from './components/error-toast';
import GlobalStyle from './globalStyles';
import App from './pages/home';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <PermissionError />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
