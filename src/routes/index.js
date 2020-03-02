import React from 'react';

import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from '../store';

import history from './history';


import AA1 from '../pages/Aa1';
import AA2 from '../pages/Aa2';

const { store, persistor } = configureStore();

const Routes = () => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>

            <Switch>

              <Route exact path="/" component={AA1} />
              <Route path="/AA1" component={AA1} />
              <Route path="/AA2" component={AA2} />
              <Route path="*" component={AA1} />

            </Switch>

        </ConnectedRouter>

      </PersistGate>
    </Provider>
);

export default Routes;
