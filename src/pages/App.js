// import React from 'react';
// import { Provider } from 'react-redux';

// import store from '../store';
// import Routes from '../routes';

// const App = () => (
//   <Provider store={store}>
//     <Routes />
//   </Provider>
// );

// export default App;


import React from 'react';
// import PropTypes from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from '../store';



import Routes from '../routes';

// import Init from './controller/init';

const persistConfig = {
 key: 'root',
 storage,
 stateReconciler: autoMergeLevel2,
 blacklist: ['preloader'], // nao colocar o preloader na lista de persistencia
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer);
const persistor = persistStore(store);

const App = () =>
(
  <Provider store={store}>

  <PersistGate loading={null} persistor={persistor}>
    {/* <Init /> */}
    {/* {element} */}
    <Routes />

  </PersistGate>

  </Provider>
);


// App.propTypes = {
//   element: PropTypes.node.isRequired,
// };

export default App;
