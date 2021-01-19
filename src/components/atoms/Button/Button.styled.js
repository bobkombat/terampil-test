import styled from 'styled-components';
import { ButtonProps } from 'components/atoms/Button/propsComponent';

const ButtonStyled = styled.button.attrs((props) => ({
  color: ButtonProps.checkButtonColor(props),
  rounded: props.rounded ? '30px' : '5px',
  size: ButtonProps.checkButtonSize(props),
  border: props.secondary ? 'solid 1px #00debf' : 'none',
}))`
  background-color: ${(props) => props.color.bgColor};
  color: ${(props) => props.color.fontColor};
  border-radius: ${(props) => props.rounded};
  width: ${(props) => props.size.width};
  height: ${(props) => props.size.height};
  padding: 15px;
  border: ${(props) => props.border};
  font-family: Inter;
  font-weight: bold;
  font-size: ${(props) => props.size.fontSize};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: center;
  margin: 5px;
  cursor: pointer;
`;

export default ButtonStyled;
