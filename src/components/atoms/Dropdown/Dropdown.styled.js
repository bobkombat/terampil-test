import styled from 'styled-components';

const StyledDropdown = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;

  .kategori {
    cursor: pointer;
  }

  .dropdown {
    position: relative;
    padding: 16px 8px;
    background: aqua;
  }

  .dropdown-content {
    position: absolute;
    display: flex;
    transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
    visibility: hidden;
    opacity: 0;
    background-color: #202020;
    padding: 32px 32px 16px 32px;
    width: 360px;
    transform: translateY(1.2em);
    border-radius: 5px;
    top: 20px;
    left: -4px;
  }

  .dropdown:hover .dropdown-content {
    visibility: visible;
    opacity: 1;
    transition-delay: 0s, 0s, 0.3s;
    transform: translateY(1.8em);
  }

  .dropdown:hover .svg {
    transform: rotate(180deg);
  }

  .svg {
    margin: 0 5px;
    transition: all 0.25s ease-in-out;
  }

  .dropdown-header {
    display: inline-block;
    float: left;
    text-align: left;
    font-family: 'Archivo', sans-serif;
    font-weight: 700;
    font-size: 18px;
    padding-bottom: 8px;
    border-bottom: solid 1px #00debf;
  }

  .mb {
    margin-bottom: 24px;
  }

  .separator {
    width: 1px;
    height: 290px;
    background-color: #626262;
    margin: 0 60px;
  }

  .dropdown-content-1 {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #c4c4c4;
  }

  .dropdown-content-2 {
    font-family: 'Archivo', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #c4c4c4;
  }
`;

export default StyledDropdown;
