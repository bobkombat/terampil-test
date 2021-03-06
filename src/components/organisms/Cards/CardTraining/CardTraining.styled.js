import styled from 'styled-components';
import {mq} from "../../../../assets/styles/theme";

export const CardTrainingStyled = styled.div`
  width: 95%;
  margin: 0 10px;
  flex-direction: column;
  display: flex;
  flex-shrink: 0;

  ${mq({
    width: [null, null, null, null, '65%']
  })}
  
  .cover-container {
    position: relative;
    width: 100%;
    height: 200px;
    margin-bottom: 12px;
  }
  
  .bookmark {
    width: 15px;
    height: 18px;
    flex: 1;
    object-fit: contain;
  }

  .bookmark-container {
    background-color: rgba(16, 16, 16, 0.2);
    position: absolute;
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  .cover {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
  }
  
  span {
    font-family: Inter,serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    margin-right: 10px;
    color: #707070;
    float: left;
    text-align: left;

    ${mq({
      fontSize: [null, null, '10px'],
      marginRight: [null, null, '4px'],
    })}
  }
  
  .share {
    width: 18px;
    height: 18px;
    object-fit: contain;
    position: absolute;
    right: 11px;
  }
  
  h1 {
    font-family: Archivo,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 30px;
    float: left;
    text-align: left;
    margin-bottom: 0;
    cursor: pointer;

    ${mq({
      fontSize: [null, null, '14px'],
      lineHeight: [null, null, '18px']
    })}
  }
  
  h2 {
    font-family: Inter,serif;
    font-style: normal;
    font-weight: 500;
    max-lines: 2;
    font-size: 16px;
    line-height: 24px;
    float: left;
    text-align: left;
    ${mq({
      fontSize: [null, null, '12px'],
      lineHeight: [null, null, '14px']
    })}
  }
  
  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    position: relative;
  }

  .tinyIcon {
    object-fit: contain;
    float: left;
    margin-right: 8px;
  }
  
  .circle {
    height: 4px;
    width: 4px;
    background-color: #707070;
    border-radius: 50%;
    float: left;
    margin-right: 10px;
    ${mq({
      marginRight: [null, null, '4px'],
    })}
  }
`

export const Flag = styled.div`
  padding: 10px 8px;
  background-color: ${props => props.collab ? '#F18F01' : '#00DEBF'};
  font-family: Inter,serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #141414;
  position: absolute;
  left: 8px;
  bottom: 8px;
  border-radius: 5px;
  float: left;
  text-align: left;
  
  ${mq({
    fontSize: [null, null, '10px'],
    padding: [null, null, '5px 4px'],
    lineHeight: [null, null, '12px']
  })}
  
`
