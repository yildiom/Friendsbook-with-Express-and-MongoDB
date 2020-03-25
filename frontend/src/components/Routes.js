import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './About';
import Home from './Home';
import Contact from './Contact';
import NoMatch from './Nomatch';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
