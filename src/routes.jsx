import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Voting from './components/Voting'
import Voting1 from './components/Voting1'

export default (
  <Route component={App}>
    <Route path='/' component={Voting} />
    <Route path='/home' component={Voting1} />
  </Route>
);