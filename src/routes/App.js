import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
  </BrowserRouter>
)

export default App;