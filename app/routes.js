import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Quiz from './containers/Quiz';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Quiz} />
    <Route path="*" component={Quiz} />
  </Route>
);
