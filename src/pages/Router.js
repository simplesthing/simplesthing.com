import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import HomePage from '../pages/HomePage'
import Sansar from '../pages/Sansar'

export default () => (
  <Router>
    <AnimatedSwitch
      atEnter={{ offset: -100 }}
      atLeave={{ offset: -100 }}
      atActive={{ offset: 0 }}
    >
      <Route exact path="/" component={Sansar} />
      <Route exact path="/sansar-client" component={Sansar} />
      {/* <Route path="/about/" component={About}/>
      <Route path="/etc/" component={Etc}/> */}
    </AnimatedSwitch>
  </Router>
)