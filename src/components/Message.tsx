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
  background: ${(props) => (props.isUser ? '#DEECFD' : '#F3F5F7')};
  font-size: 14px;
  gap: 10px;
  word-break: break-word;
  max-width: 35ch;
  padding: 10px;
  border-radius: 8px;
`;

const Author = styled.h4`
  color: #9ea4ac;
`;

const Time = styled.time`
  font-size: 12px;
  align-self: end;
  color: #9ea4ac;
  word-break: normal;
`;

export default Message;
