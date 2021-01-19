import styled from 'styled-components';
import { ButtonProps } from 'components/atoms/Button/propsComponent';
import { mq } from 'assets/styles/theme';

const ButtonStyled = styled.button.attrs((props) => ({
  color: ButtonProps.checkButtonColor(props),
  rounded: props.rounded ? '30px' : '5px',
  size: ButtonProps.checkButtonSize(props),
  border: props.secondary ? 'solid 1px #00debf' : 'none',
}))`
  --var-width: ${(props) => props.size.width};
  --var-height: ${(props) => props.size.height};
  --var-fontsize: ${(props) => props.size.fontSize};

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

  ${mq({
    width: [null, null, null, 'calc(var(--var-width) - 30px)', 'calc(var(--var-width) - 50px)'],
    height: [null, null, null, null, 'calc(var(--var-height) - 5px)'],
    fontSize: [
      null,
      null,
      null,
      'calc(var(--var-fontsize) - 3px)',
      'calc(var(--var-fontsize) - 5px)',
    ],
    padding: [null, null, null, '10px'],
  })}
`;

export default ButtonStyled;
