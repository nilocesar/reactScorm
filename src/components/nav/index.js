import React from 'react';
// import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import * as S from './styles';

// import { navMode } from '../../state/reducers/nav'

const Nav = ({ setaPrev, setaNext }) => {
  const Prev = () => {
    // dispatch(navMode('prev'));
  };

  const Next = () => {
    // dispatch(navMode('next'));
  };

  return (
    <div>
      <S.btnPrev onClick={Prev} isVisible={setaPrev}> </S.btnPrev>
      <S.btnNext onClick={Next} isVisible={setaNext}> </S.btnNext>
    </div>
  );
};

Nav.propTypes = {
  setaPrev: PropTypes.bool,
  setaNext: PropTypes.bool,
};


export default Nav;
