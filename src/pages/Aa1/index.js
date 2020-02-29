import React from 'react';
import { connect } from 'react-redux';


import Layout from '../../components/layout';

import * as S from './styles';

import { navMode } from '../../store/reducers/nav';
// import { scormMode } from '../../state/reducers/scorm'

const Aa1 = ({ indiceNav, dispatch }) => {
  const iniciar = () => {
    dispatch(navMode('go', 2));
  };

  return (
    <Layout setaPrev={false} setaNext={false}>
      <S.container>
        <S.bg> </S.bg>
        <div className="ti1 bold animated fadeInUp delay0_5">
          Curso teste AA1
        </div>

        <div className="desc book animated zoomIn delay1_0">
            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim
            que vai caçá sua turmis! Em pé sem cair, deitado sem dormir, sentado
            sem cochilar e fazendo pose. In elementis mé pra quem é amistosis quis
            leo. Paisis, filhis, espiritis santis.
        </div>

        <button className="btnNext bold animated zoomIn delay1_5" onClick={iniciar}>
          Iniciar
        </button>

      </S.container>
    </Layout>
  );
};

export default connect(state => ({ indiceNav: state.nav.indiceNav }), null)(Aa1);
