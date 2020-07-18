import React from 'react';

import styles from './ChatWindow.module.scss';
import ChatWindowHeader from "../ChatWindowHeader/ChatWindowHeader.component";
import ChatMessagesHistory from "../ChatMessagesHistory/ChatMessagesHistory.component";

const messages = [
    {
        text: 'hello',
        date: Date.now(),
        isMine: true
    }, {
        text: 'hello',
        date: Date.now()
    }, {
        text: 'Rafael Ramaisen has invited Dmitry Shirshov',
        system: true,
    }, {
        text: 'hello',
        date: Date.now()
    }, {
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aspernatur cupiditate et explicabo fugiat illum numquam reprehenderit sint tenetur?
        A adipisci aliquid asperiores autem, corporis cumque delectus deserunt doloremque, eos error est et eum facilis harum illo in incidunt itaque magni minima, nesciunt numquam placeat quisquam ratione rem tempore tenetur voluptatum?`,
        date: Date.now(),
        isMine: true
    },
]

const ChatWindow = () => {
    return (
        <div className={styles['chat-window']}>
            <ChatWindowHeader />
            <ChatMessagesHistory messages={messages} />
        </div>
    );
};

export default ChatWindow;
