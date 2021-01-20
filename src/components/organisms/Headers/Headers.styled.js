import styled from 'styled-components';
import { mq } from 'assets/styles/theme';

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 77px;
  padding: 15px 100px 14px 100px;
  background-color: #000004;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  -webkit-backface-visibility: hidden;

  & > div {
    display: flex;
  }

  .header-link {
    min-width: 180px;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
  }

  ${mq({
    padding: [
      '15px 100px 14px 100px',
      null,
      '15px 60px 14px 60px',
      '15px 30px 14px 30px',
      '15px 10px 14px 10px',
    ],
    '.header-link': {
      minWidth: ['180px', null, null, '160px'],
    },
  })}
`;

export const Image = styled.img`
  width: 126px;
  height: 41px;
  margin: 3px 30px 4px 0;
`;
