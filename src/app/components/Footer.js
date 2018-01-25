import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';

class Footer extends React.Component {
   constructor(props) {
      super();
   }

   render() {
      return (
         <footer>
            <div className="copyright">
               <p>This app is built with React</p>
            </div>
         </footer>
      );
   }
}

module.exports = Footer;
