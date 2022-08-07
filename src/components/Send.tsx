import styled from 'styled-components';
import React, { FC } from 'react';
import icons from '../.svg';

interface SendProps {
  createMessage: () => void;
}

const Send: FC<SendProps> = ({ createMessage }) => <Button onClick={createMessage}></Button>;

const Button = styled.button`
  min-width: 30px;
  min-height: 30px;
  border: none;
  background: url(${icons.sendIcon}) center no-repeat;
  cursor: pointer;
`;

export default Send;
