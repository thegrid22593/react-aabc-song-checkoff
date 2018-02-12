import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import store from './store';
import firebaseConfig from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('app')
 );
