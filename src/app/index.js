import React from 'react';
import ReactDOM from 'react-dom';
import render from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>, 
document.getElementById('app'));
