import React from 'react';
import { Route, Switch } from 'react-router';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Articles from './pages/articles';
import Practice from './pages/practice';
import Header from './components/common/Header';
import SideNav from './components/common/SideNav';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/article-create" component={Articles} />
        <Route exact path="/Articles/:articleId" component={Articles} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/practice" component={Practice} />
        <Route render={() => <div>Miss</div>} />
      </Switch>
    </div>
  );
}
