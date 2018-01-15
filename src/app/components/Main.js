import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Work from './Work'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={SignIn}/>
      <Route path='/about' component={About}/>
      <Route path='/work' component={Work}/>
    </Switch>
  </main>
)

export default Main