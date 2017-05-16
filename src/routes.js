import React from 'react';
import { IndexRoute } from 'react-router';
import { MainApp } from './store/configStore';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import Listings from './components/Trader/ListingsComponent';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
import Cart from './components/Trader/CartComponent.js';
import PopUpComponent from './components/Trader/Utilities/PopUpComponent';

import { Router } from 'react-router';

export default (
  <Router>
    <Router path="/" component={MainApp}>
      <IndexRoute component={LoginPage} />
      <Router path="dashboard" component={Dashboard} />
      <Router path="/Listings/:item" component={Listings} />
      <Router path="cart" component={Cart} />
      <Router path="create" component={PopUpComponent} />
    </Router>
  </Router>
);
