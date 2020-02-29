import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AA1 from '../pages/Aa1';
import AA2 from '../pages/Aa2';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact path="/" component={AA1} /> */}
      <Route path="/AA1" component={AA1} />
      <Route path="/AA2" component={AA2} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
