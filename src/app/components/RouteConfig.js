import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import MusicLibraryPage from "./MusicLibraryPage";
import UserDashboardPage from './UserDashboardPage';
import UserDashboardSummary from './UserDashboardSummary';

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components
const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li><Link to="/tacos/bus">Bus</Link></li>
      <li><Link to="/tacos/cart">Cart</Link></li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
)


////////////////////////////////////////////////////////////
// then our route config
const routes = [
  { path: '/dashboard',
    component: UserDashboardPage,
    routes: [
        {
            path: '/dashboard/summary',
            component: UserDashboardSummary
        },
        {
            path: '/dashboard/part-comparison',
            component: UserDashboardPartComparison
        },
        {
            path: '/dashboard/messages',
            component: UserDashboardMessages
        }
    ]
  },
  {
      path: '/music-library',
      component: MusicLibraryPage,
  }
]

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

const RouteConfigExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/tacos">Tacos</Link></li>
        <li><Link to="/sandwiches">Sandwiches</Link></li>
      </ul>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>
)

export default RouteConfigExample;