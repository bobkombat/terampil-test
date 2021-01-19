import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 77px;
  padding: 15px 100px 14px;
  background-color: #000004;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
  }

  .header-link {
    width: 190px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
  }
`;

export const Image = styled.img`
  width: 126px;
  height: 41px;
  margin: 3px 30px 4px 0;
`;
