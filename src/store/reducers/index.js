import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { nav } from './navReducers';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  nav,
});
export default createRootReducer;
