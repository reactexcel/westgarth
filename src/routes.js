import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AccountInfo from './components/accountInfo/index';
import Collection from './components/Collection/index';
// import Dashboard from './components/Dashboard/index';
function Routes() {
  return (
    <div className="App p-4">
      <Router>
        <Switch>
          <Route path="/collection" component={Collection} />
          <Route path="/" component={AccountInfo} />
          {/* <Route path="/" component={Dashboard} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
