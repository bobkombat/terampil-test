import styled from 'styled-components';

export const Search = styled.div`
  width: 340px;
  height: 48px;
  margin: 0 71px 0 30px;
  padding: 8px 10px 10px 16px;
  border-radius: 5px;
  background-color: #23272f;
  font-family: Inter;
  font-size: 14px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  input[type='text'] {
    background-color: inherit;
    width: 80%;
    border: none;
    height: 90%;
    font-family: Inter;
    /* margin-left: 5px; */
    color: #949d9c;
  }
  img {
    width: 24px;
    height: 24px;
    margin: 0;
    padding: 3px 20.5px 3px 2.5px;
  }
`;
