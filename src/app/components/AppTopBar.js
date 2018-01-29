import ReactDOM from 'react-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import fire from '../../fire';
require('../scss/style.scss');

class AppTopBar extends React.Component {
   constructor() {
      super();
   }

   componentWillMount() {}

   render() {
      return (
         <nav className="main-nav">
            <a className="nav-branding" href="#">
               Music Library
            </a>
            <ul className="nav-links">
               <li>
                  <i className="fa fa-sign-out" aria-hidden="true" />Sign Out
               </li>
               <li>
                  <i className="fa fa-inbox" aria-hidden="true" />
               </li>
            </ul>
            <ul className="user-info">
               <li>
                  <i className="fa fa-user-circle-o" aria-hidden="true" />
               </li>
               {/* <li>Hello {{displayName}}!</li> */}
               <Link to="/user-settings">
                  <i className="fa fa-cog" aria-hidden="true" />
               </Link>
            </ul>
         </nav>
      );
   }
}

module.exports = AppTopBar;
