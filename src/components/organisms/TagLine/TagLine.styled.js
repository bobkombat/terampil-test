import styled from "styled-components";

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
  @media screen and (max-width: 800px) {
    font-size: 40px;
    width: 500px;
    margin-right: 64px;
    margin-left: 64px;
  }
  @media screen and (max-width: 438px) {
    font-size: 24px;
    width: 300px;
    margin-right: 8px;
    margin-left: 8px;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const SubTagLine = styled.p`
  width: 690px;
  font-size: 20px;
  font-weight: 300;
  font-style: normal;
  color: #C4C4C4;
  margin-bottom: 70px;
  @media screen and (max-width: 800px) {
    width: 480px;
    font-size: 12px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 438px) {
    width: 280px;
    font-size: 12px;
  }
`

export const ButtonTagLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 78px;
  @media screen and (max-width: 438px) {
    flex-direction: column;
  }
`
