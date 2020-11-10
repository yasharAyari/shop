import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import OverView from './pages/overview';
import Detail from './pages/detail';
import ConfirmPurchase from './pages/confirmPurchase';
import SuccessfulPurchase from './pages/success';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <OverView />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/confirm-purchase">
            <ConfirmPurchase />
          </Route>
          <Route path="/successful-purchase">
            <SuccessfulPurchase />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
