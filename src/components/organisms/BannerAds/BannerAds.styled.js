import styled from 'styled-components';
import {mq} from "../../../assets/styles/theme";

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 198px;
  background: linear-gradient(90deg, #00E282 0%, #00DDC0 100%);
  
  .side {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
  }
  
  .small {
    width: 44px;
    height: 66px;
    margin-top: -80px;
  }
`

export const Content = styled.div`
  display: flex;
  flex: 4;
  padding-top: 20px;
  padding-bottom: 20px;

  ${mq({
    flexDirection: [null, null, null, null, 'column'],
    justifyContent: [null, null, null, null, 'space-between']
  })}
  
  .text {
    display: flex;
    flex-direction: column;
    flex: 2;
    justify-content: center;
  }

  .button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .title {
    margin: 0;
    font-family: Archivo,serif;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 33px;
    /* identical to box height */
    float: left;
    color: #000000;
    text-align: left;
    
    ${mq({
      fontSize: [null, null, null, null, '16px']
    })}
  }

  .subtitle {
    margin: 24px 0;
    font-family: Inter,serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */
    float: left;
    color: #000000;
    text-align: left;

    ${mq({
      fontSize: [null, null, null, null, '14px'],
      margin: [null, null, null, null, '0']
    })}
  }
`
