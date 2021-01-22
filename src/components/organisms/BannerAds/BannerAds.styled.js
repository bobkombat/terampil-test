import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 198px;
  background: linear-gradient(90deg, #00E282 0%, #00DDC0 100%);
  
  .side {
    flex: 1;
  }
  
`

export const Content = styled.div`
  display: flex;
  flex: 4;
  
  .text {
    display: flex;
    flex-direction: column;
    flex: 2;
    justify-content: center;
  }

  .button {
    flex: 1;
    background-color: red;
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

  }
`
