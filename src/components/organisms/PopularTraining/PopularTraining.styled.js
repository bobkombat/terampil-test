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
  
  .button-slider {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .slider {
    position: relative;
    margin-bottom: 8px;
  }

  .overlay {
    display: flex;
    flex-direction: row;
    position: relative;
    margin-bottom: 8px;
    overflow: auto;   
  }
  
`;

export const CardContainer = styled.div`
  padding: 0 100px;
  justify-content: center;
  vertical-align: center;
  align-items: center;
  
  ${mq({
    padding: ['0 100px', null, '0 60px'],
  })}
  
`

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`

export const CategoryText = styled.a`
  flex: 1;
  font-family: Inter,serif;
  font-style: normal;
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  
  color: ${props => props.selected ? '#00DEBF' : '#C4C4C4'};
  margin: 0 10px;
  cursor: pointer;
  white-space: nowrap;
  
  ${mq({
    fontSize: [null, null, null, null, '12px']
  })}

`
