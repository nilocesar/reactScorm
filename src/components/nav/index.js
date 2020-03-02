import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import * as S from './styles';

import * as navActions from '../../store/reducers/navReducers';

const Nav = ({ ind, navEvent, setaPrev, setaNext }) => {
  const Prev = () => {
    navEvent('NAV_EVENT', ind - 1);
  };

  const Next = () => {
    navEvent('NAV_EVENT', ind + 1);
  };

  return (
    <div>
      <S.btnPrev onClick={Prev} isVisible={setaPrev}> </S.btnPrev>
      <S.btnNext onClick={Next} isVisible={setaNext}> </S.btnNext>
    </div>
  );
};

Nav.propTypes = {
  ind: PropTypes.number.isRequired,
  navEvent: PropTypes.func.isRequired,
  setaPrev: PropTypes.bool.isRequired,
  setaNext: PropTypes.bool.isRequired,
};


export default connect(state => ({ ind: state.nav.ind }), navActions)(Nav);
