
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';
import history from '../routes/history';


const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  // blacklist: ['preloader'] // nao colocar o preloader na lista de persistencia
 };


const middlewares = [routerMiddleware(history), thunk];

const pReducer = persistReducer(persistConfig, createRootReducer(history));

export default function configureStore(preloadedState) {
  const store = createStore(
    pReducer,
    preloadedState,
    compose(
      applyMiddleware(...middlewares),
    ),
  );

  const persistor = persistStore(store);

  return { store, persistor };
}
