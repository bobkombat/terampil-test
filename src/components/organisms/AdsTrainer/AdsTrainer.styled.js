import styled from 'styled-components'
import { mq } from '../../../assets/styles/theme'
import { globalTheme } from "../../../assets/styles/theme";

export const AdsTrainerStyled = styled.div`
  display: flex;
  background: linear-gradient(90.08deg, #01E284 0.07%, #01DDBF 100.9%);
  margin: 80px 100px;
  border-radius: 20px;
  flex-direction: row;
  padding: 40px 100px;

  ${mq({
    flexDirection: [null, null, null, null, 'column'],
    margin: [null, null, null, '80px 40px', '80px 20px'],
    padding: [null, null, null, '40px 40px', '20px 20px']
  })}
  h1 {
    flex: 1;
    font-family: Archivo,serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 26px;
    color: #101010;
    float: left;
    text-align: left;
    z-index: 2;

    ${mq({
      fontSize: [null, null, null, null, '18px']
    })}
  }

  p {
    flex: 4;
    font-family: Inter,serif;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 31px;
    float: left;
    color: #101010;
    z-index: 2;
    text-align: left;

    ${mq({
      fontSize: [null, null, null, null, '14px']
    })}
  }

  .first {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    border-right-color: #000004;
    border-right-width: 1px;
    border-right-style: solid;
    padding-right: 48px;

    ${mq({
      borderRightWidth: [null, null, null, null, '0px'],
      borderBottomWidth: [null, null, null, null, '1px'],
      borderBottomStyle: [null, null, null, null, 'solid'],
      borderBottomColor: [null, null, null, null, '#000004'],
      paddingBottom: [null, null, null, null, '10px'],
      paddingRight: [null, null, null, null, '0px']
    })}
  }

  .second {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 48px;
    position: relative;
    ${mq({
      paddingLeft: [null, null, null, null, '0px'],
    })}
  }

  .imgFirst {
    position: absolute;
    width: 88px;
    height: 128px;
    left: -69px;
    top: 0;

    ${mq({
      left: [null, null, null, '-20px', '0px'],
    })}
  }

  .imgSecond {
    position: absolute;
    width: 88px;
    height: 128px;
    right: 23px;
    bottom: 0;
  }
  
  .button {
    float: left;
    flex: 1;
    transition: all 0.2s ease-in-out;
    
    &:hover {
      background-color: #000004;
      color: ${globalTheme.color.primary};
    }
    
    ${mq({
      width: [null, null, null, null, '100px']
    })}
    
  }
`
