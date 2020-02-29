import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../../styles/global';

import Header from '../header';
import Nav from '../nav';
// import { connect } from 'react-redux';

import * as S from './styles';


const layout = ({ children, setaPrev = true, setaNext = true }) => (
    <S.container>

        <GlobalStyles />

        <main>{children}</main>

        <Header />
        <Nav setaPrev={setaPrev} setaNext={setaNext} />

        {/* <S.preloader isVisible={preStatus}>
          <S.preloaderInt />
        </S.preloader> */}

    </S.container>
  );

layout.propTypes = {
  children: PropTypes.node.isRequired,
  setaPrev: PropTypes.bool,
  setaNext: PropTypes.bool,
};

export default layout;
