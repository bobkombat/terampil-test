import styled from 'styled-components';
import {mq} from '../../../assets/styles/theme';

export const Container = styled.section`
  width: 100%;
  background-color: #202020;
  padding: 40px 0;

  & > h1 {
    font-family: Archivo,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 26px;
    text-align: center;

    color: #FDFDFD;
  }
  
`;

export const CardContainer = styled.div`
  padding: 0 100px;
  justify-content: center;
  align-items: center;
  
  ${mq({
    padding: ['0 100px', null, '0 60px'],
  })}
  
`

export const CategoryText = styled.a`
  font-family: Inter,serif;
  font-style: normal;
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: ${props => props.selected ? '#00DEBF' : '#C4C4C4'};
  margin: 0 10px;
  cursor: pointer;

`
