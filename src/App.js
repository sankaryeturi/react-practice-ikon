import React from 'react';
import { Route, Switch } from 'react-router';
import Grid from '@material-ui/core/Grid';
import Login from './pages/login';
import Articles from './pages/articles';
import Header from './components/common/Header';

export default function App() {
  return (
    <Grid container spacing={24}>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Articles" component={Articles} />
        <Route exact path="/Articles/:articleId" component={Articles} />
        <Route render={() => <div>Miss</div>} />
      </Switch>
    </Grid>
  );
}
