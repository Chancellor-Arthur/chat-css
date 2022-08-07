import React, { useState } from 'react';
import EntryButton from './EntryButton';
import ChatContainer from './ChatContainer';
import styled from 'styled-components';

const Chat = () => {
    const [visible, setVisible] = useState(false);

    return (
        <ChatArea>
            {visible ? <ChatContainer /> : null}
            <EntryButton visible={visible} onClick={() => setVisible((open) => !open)}></EntryButton>
        </ChatArea>
    );
};

const ChatArea = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    bottom: 0;
    height: 100vh;

    @media screen and (min-width: 411px) {
        right: 0;
    }
`;

export default Chat;
