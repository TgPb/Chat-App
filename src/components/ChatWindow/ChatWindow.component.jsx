import React from 'react';

import styles from './ChatWindow.module.scss';
import ChatWindowHeader from "../ChatWindowHeader/ChatWindowHeader.component";

const ChatWindow = ({ match: { params: { chatId } } }) => {
    console.log({ chatId })
    return (
        <div className={styles['chat-window']}>
            <ChatWindowHeader />
            Chat Window { chatId }
        </div>
    );
};

export default ChatWindow;
