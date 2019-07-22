import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import reducer from './reducers';
import App from './routes/App';

if (typeof window !== 'undefined') {
  let composeEnhacers;
  if (process.env.NODE_ENV === 'production') composeEnhacers = compose;
  else composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const preloadedState = window.__PRELOADED_STATE__;
  const store = createStore(reducer, preloadedState, composeEnhacers(applyMiddleware(thunk)));
  const history = createBrowserHistory();

  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App isLogged={(preloadedState.user.id)} />
      </Router>
    </Provider>,
    document.getElementById('app'),
  );
}
