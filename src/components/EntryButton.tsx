import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { EntryButtonProps } from '../types/types';
import icons from '../.svg';

const EntryButton: FC<EntryButtonProps> = ({ visible, onClick }) => {
  return <Button visible={visible} onClick={onClick} />;
};

const Button = styled.button<{ visible: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border: none;
  cursor: pointer;
  background: url(${icons.backgroundIcon}) center no-repeat;
  animation: showBackground 1s;

  ${({ visible }) =>
    visible &&
    css`
      @media screen and (max-width: 410px) {
        width: 60px;
        height: 60px;
        top: 1px;
        right: 1px;
        background-image: url(${icons.backgroundIconMobile});
      }
    `}
  &::before {
    content: '';
    background: ${({ visible }) => (visible ? `url(${icons.crossIcon})` : `url(${icons.chatIcon})`)} no-repeat center;
    width: ${({ visible }) => (visible ? '15px' : '30px')};
    height: ${({ visible }) => (visible ? '15px' : '30px')};
    animation: ${({ visible }) =>
      visible
        ? 'showCross 1s linear'
        : 'chatTransformToCross 1s, ascentIcon 1s reverse linear 5s, reverseAscentIcon 1s forwards linear 5s, reverseAscentIcon 1s reverse linear 10s, ascentIcon 1s forwards linear 10s'};

    @keyframes ascentIcon {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes showBackground {
      from {
        opacity: 0;
      }
      50% {
        opacity: 0.5;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes showCross {
      from {
        background: url(${icons.crossIcon});
        transform: scale(0) rotate(0deg);
      }
      to {
        transform: scale(1) rotate(360deg);
      }
    }

    @keyframes chatTransformToCross {
      from {
        background-image: url(${icons.crossIcon});
        transform: scale(1) rotate(360deg);
      }
      40% {
        background-image: url(${icons.crossIcon});
        transform: scale(0) rotate(0deg);
      }
      60% {
        background: url(${icons.chatIcon});
        transform: translateY(20px) scale(1);
      }
      to {
        transform: translateY(0);
      }
    }

    @keyframes reverseAscentIcon {
      from {
        opacity: 0;
        transform: translateY(20px) scale(-1, 1);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(-1, 1);
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    top: 20px;
    background: no-repeat;
    animation: ${({ visible }) =>
      !visible && 'showLeftTextIcon 5s linear 1s, showRightTextIcon 5s linear 6s, showTickIcon 5s linear 10s'};

    @keyframes showLeftTextIcon {
      from {
        background-image: url(${icons.textLeftIcon});
        height: 0;
      }
      50% {
        background-image: url(${icons.textLeftIcon});
        height: 75%;
      }
      75% {
        height: 0;
      }
    }
    @keyframes showRightTextIcon {
      from {
        background-image: url(${icons.textRightIcon});
        height: 0;
      }
      50% {
        background-image: url(${icons.textRightIcon});
        height: 100%;
      }
      75% {
        height: 0;
      }
    }
    @keyframes showTickIcon {
      from {
        background-image: url(${icons.tickIcon});
        transform: scale(0.75);
        opacity: 0;
      }
      25% {
        background-image: url(${icons.tickIcon});
        opacity: 1;
      }
      50% {
        background-image: url(${icons.tickIcon});
        opacity: 1;
      }
      75% {
        opacity: 0;
      }
    }
`;

export default EntryButton;
