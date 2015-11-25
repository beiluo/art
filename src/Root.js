import React, { Component } from 'react';
import { createStore, compose, combineReducers } from 'redux';

import {
  ReduxRouter,
  routerStateReducer,
  reduxReactRouter
} from 'redux-router';

import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { devTools } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { createHistory } from 'history';

const reducer = combineReducers({
  router: routerStateReducer
});

const store = compose(
  reduxReactRouter({ createHistory }),
  devTools()
)(createStore)(reducer);

import App from './components/App';
import Voting from './components/Voting'
import Voting1 from './components/Voting1'

class Root extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ReduxRouter>
            <Route component={App}>
              <Route path='/' component={Voting} />
              <Route path='/home' component={Voting1} />
            </Route>
          </ReduxRouter>
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      </div>
    );
  }
}

export default Root;