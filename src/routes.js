import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import accountInfo from './components/accountInfo/index';
function Routes() {
  return (
    <div className="App p-4">
      <Router>
        <Switch>
          <Route path="/" component={accountInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
