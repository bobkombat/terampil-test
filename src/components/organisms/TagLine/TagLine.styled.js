import styled from "styled-components";
import {mq} from "../../../assets/styles/theme";

export const TagLineStyled = styled.h1`
  width: 800px;
  flex-direction: column;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  color: #FDFDFD;
  margin-top: 96px;
  margin-right: 288px;
  margin-left: 288px;
  background-color: #a52a2a;

  ${mq({
    fontSize: [
      '90px', '60px', '40px', '24px',
    ],
    width: ['1200px', '800px', '500px', '300px'],
    marginLeft: [null, null, '64px', '24px'],
    marginRight: [null, null, '64px', '24px'],
  })};
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: blue;
`

export const SubTagLine = styled.p`
  width: 1000px;
  font-size: 28px;
  font-weight: 300;
  font-style: normal;
  color: #C4C4C4;
  margin-bottom: 70px;
  ${mq({
    fontSize: [
      null, '20px', '12px', null,
    ],
    width: [ null, '700px', '400px', '300px'],
    marginLeft: [null, null, '64px', '24px'],
    marginBottom: [null, null, '30px', null],
  })};
`

export const ButtonTagLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 78px;
  @media screen and (max-width: 438px) {
    flex-direction: column;
  }
`

export const ImageBackground = styled.img`
  height: 355px;
  width: 242px;
  pointer-events: none;
  position: absolute;
  z-index: 0;
  right: 340px;
  top: 280px;
  
  ${mq({
    height: [null, null, '180px', '130px'],
    width: [null, null, '120px', '90px'],
    right: [null, '240px', '100px', '15px'],
    top: [null, '140px', '100px', '100px']
  })};
 
`
