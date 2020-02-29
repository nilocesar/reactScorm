import React from 'react';
import { connect } from 'react-redux';

import { preloaderMode } from '../reducers/preloader';

const Init = ({ indiceNav, dispatch }) => {
  // navigate('/Aa'+ indiceNav + "/" );

  setTimeout(() => {
    dispatch(preloaderMode(false));
  }, 1000 * 2);


  return (<></>);
};

export default connect(state => ({ indiceNav: state.nav.indiceNav }), null)(Init);
