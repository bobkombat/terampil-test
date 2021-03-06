import styled from 'styled-components';

const StyledDropdown = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;

  .kategori {
    display: flex;
    cursor: pointer;
    align-items: center;
  }

  .dropdown {
    position: relative;
    padding: 16px 8px;
  }

  .dropdown-content {
    float: left;
    position: absolute;
    z-index: 10;
    display: flex;
    transition: all 0.2s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
    visibility: hidden;
    opacity: 0;
    background-color: #202020;
    padding: 32px 32px 18px 32px;
    transform: translateY(1.2em);
    border-radius: 5px;
    top: 20px;
    left: -4px;
    --mw: inherit;
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

  .first-content {
    padding-top: 1px;
    text-align: left;
    border-right: 1px solid #c4c4c4;
    padding-right: 24px;
    margin-right: 24px;
    white-space: nowrap;
  }

  .second-content {
    text-align: left;
  }

  .dropdown-content-1 {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #c4c4c4;
    margin: 0 0 24px 0;
  }

  .dropdown-content-2 {
    font-family: 'Archivo', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #c4c4c4;
    margin: 0 0 24px 0;
  }
`;

export default StyledDropdown;
