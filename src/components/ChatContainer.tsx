import React, { useState } from 'react';
import { MessageProps } from '../types/types';
import Message from './Message';
import styled from 'styled-components';
import Send from './Send';
import SmileButton from './SmileButton';
import QuestionPresets from './QuestionPresets';

const ChatContainer = () => {
  const [currentMessage, setCurrentMessage] = useState('');

  const [messages, setMessages] = useState<MessageProps[]>([
    {
      id: 1,
      isUser: false,
      author: 'Наместник',
      time: '12:00',
      children: 'Здравствуйте, я - Верховный наместник Нового Короза, готов ответить на ваши вопросы.',
    },
    { id: 2, isUser: true, time: '13:00', children: 'Какова ситуация в Авангарде?' },
    {
      id: 3,
      isUser: false,
      author: 'Наместник',
      time: '13:01',
      children: '...',
    },
  ]);

  const createMessage = () => {
    setMessages((messages) => [
      ...messages,
      {
        id: Date.now(),
        isUser: true,
        time: new Date(Date.now()).toLocaleTimeString().substring(0, 5),
        children: currentMessage,
      },
    ]);
    setCurrentMessage('');
  };

  return (
    <ChatContainerWrapper>
      <Messages>
        <Header>Приветствую!</Header>
        <QuestionPresets />
        {messages.map((message) => (
          <Message key={message.id} id={message.id} isUser={message.isUser} time={message.time} author={message.author}>
            {message.children}
          </Message>
        ))}
      </Messages>
      <TextareaContainer onSubmit={(event) => event.preventDefault()}>
        <SmileButton value={currentMessage} setValue={setCurrentMessage} />
        <Textarea
          placeholder="Введите сообщение..."
          value={currentMessage}
          onChange={(element) => setCurrentMessage(element.target.value)}
        />
        {currentMessage && <Send createMessage={createMessage} />}
      </TextareaContainer>
    </ChatContainerWrapper>
  );
};

const Header = styled.h1`
  align-self: center;
`;

const ChatContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 16px rgba(51, 51, 51, 0.2);
  border-radius: 4px;
  background: white;
  margin-top: 6px;
  margin-right: 15px;
  width: 380px;
  height: calc(100vh - (15px + 58px + 21px + 6px));
  margin-bottom: 10vh;

  @media screen and (max-width: 410px) {
    margin-top: 0;
    margin-right: 0;
    width: 100vw;
    height: 100vh;
  }

  @media screen and (min-width: 411px) {
    border-top: 5px solid #0848c0;
  }
`;

const TextareaContainer = styled.form`
  display: flex;
  align-items: end;
  box-shadow: 0 0 1px 1px #d6dade;
  border-radius: 2px;
  margin: 16px;
  padding: 10px 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 48px;
  resize: none;
  outline: none;
  border: none;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Messages = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 16px;
  max-height: 760px;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: lightgray;
  }
`;

export default ChatContainer;
