import React, { FC } from 'react';
import styled from 'styled-components';
import { MessageProps } from '../types/types';

const Message: FC<MessageProps> = ({ isUser, author, time, children }) => {
  return (
    <MessageWrapper isUser={isUser}>
      <MessageContainer isUser={isUser}>
        <div>
          <Author>{author}</Author>
          {children}
        </div>
        <Time>{time}</Time>
      </MessageContainer>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div<{ isUser: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isUser ? 'end' : 'start')};
`;

const MessageContainer = styled.div<{ isUser: boolean }>`
  display: flex;
  background: ${(props) => (props.isUser ? '#aaaffd' : '#e1e1e1')};
  font-size: 14px;
  gap: 10px;
  word-break: break-word;
  max-width: 35ch;
  padding: 10px;
  border-radius: 7px;
`;

const Author = styled.h4`
  color: #807f7f;
`;

const Time = styled.time`
  font-size: 12px;
  align-self: end;
  color: #807f7f;
  word-break: normal;
`;

export default Message;
