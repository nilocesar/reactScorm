import React from 'react';

import { HelpCircle as Help } from 'styled-icons/boxicons-solid/HelpCircle';
import { CloseCircle as Close } from 'styled-icons/remix-fill/CloseCircle';
import * as S from './styles';


const Header = () => (
    <S.container>
      <div className="logo">
        {/* <Img fluid={image.childImageSharp.fluid} /> */}
      </div>
      <div className="controles">
        <div className="ajudaBtn">
{' '}
<Help title="Ajuda" />
{' '}
        </div>
        <div className="fecharBtn">
{' '}
<Close title="Fechar" />
{' '}
        </div>
      </div>
    </S.container>
  );


export default Header;
