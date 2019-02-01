import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import Loader from './components/shared/loader/Loader';
import store from './state/store';

import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Loader />
    <App />
  </Provider>,
  document.getElementById('root')
);
