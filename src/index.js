import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import Loader from './components/shared/loader/Loader';
import reducers from './state/reducers';
import middlewares from './state/middlewares';

import './styles/index.scss';

const store = createStore(reducers, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <Loader />
    <App />
  </Provider>,
  document.getElementById('root')
);
