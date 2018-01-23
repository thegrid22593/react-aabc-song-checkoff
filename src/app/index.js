import React from 'react';
import ReactDOM from 'react-dom';
import render from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('app')
 );
