import styled from 'styled-components';
import { mq } from 'assets/styles/theme';

export const Container = styled.div`
  width: 48rem;
  margin: 24px 0;
  background-color: #373737;
  border-radius: 10px;

  ${mq({
    width: [null, null, '42rem', null, '100%'],
    margin: [null, null, null, '12px 0px'],
  })}
`;

export const Question = styled.div`
  cursor: pointer;
  padding: 28px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #fdfdfd;
  background-color: #373737;
  border-radius: 10px;
  text-align: left;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #313131;
  }

  .icon-faq {
    transform: rotate(180deg);
    transition: all 0.3s ease-in-out;
  }

  .icon-faq-active {
    transform: rotate(0deg);
  }
  ${mq({
    fontSize: [null, null, null, null, '16px'],
    padding: [null, null, null, null, '18px'],
  })}
`;

export const Answer = styled.p`
  margin: 0;
  font-family: 'Inter', sans-serif;
  border-radius: 10px;
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  color: #c4c4c4;

  overflow: auto;

  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease;

  padding: 0 28px;
  line-height: 24px;
  background-color: #373737;

  &.active {
    padding-top: 20px;
    padding-bottom: 24px;
  }

  &.opened {
    max-height: 499px;
  }

  @media screen and ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    padding: 0 18px;
    line-height: 20px;
  }
`;
