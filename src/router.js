import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import statisticalTable from "./routes/statisticalTable/index"
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/statisticalTable" component={statisticalTable} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
