import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeComponent from '../homeComponent';
import surverComponent from '../surveyComponent';

const RoutesComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/survey" component={surverComponent} />
        <Route path="/" component={HomeComponent} />
      </Switch>
    </Router>
  );
};
export default RoutesComponent;
