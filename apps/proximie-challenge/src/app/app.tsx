import React from 'react';
import { BookPage, Bookdetail, Pagenotfound } from '@proximie-challenge/ui';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <BookPage />
        </Route>
        <Route path="/book/:volumeId">
          <Bookdetail />
        </Route>
        <Route>
          <Pagenotfound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
