
import styled from 'styled-components';
import bgimg from '../../images/cenario1.jpg';

export const container = styled.div`
  position:absolute;
  width: 100vw;
  height: 100vh;
  top:0;
  left:0;

    .ti1{
      position: absolute;
      width: 50vw;
      top: 35vw;
      left: 20vw;
      color: #002559;
      font-size: 3vw;
    }

    .desc{
      position: absolute;
      width: 60vw;
      top: 40vw;
      left: 20vw;
      color: #fff;
      font-size: 2vw;
      background: #002559;
      padding:3vw;
    }

`;

export const bg = styled.div`
background: url(${bgimg});
  width: 100vw;
  height:100vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;
