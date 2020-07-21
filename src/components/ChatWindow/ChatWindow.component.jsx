import React from 'react';

import styles from './ChatWindow.module.scss';
import ChatWindowHeader from "../ChatWindowHeader/ChatWindowHeader.component";
import MessageSender from "../MessageSender/MessageSender.component";

import {ConnectedChatMessagesHistory} from "../ChatMessagesHistory/ChatMessagesHistory.containers";

const ChatWindow = ({ match: { params : { chatId }} }) => {
    return (
        <div className={styles['chat-window']}>
            <ChatWindowHeader />
            <ConnectedChatMessagesHistory chatId={chatId} />
            <MessageSender />
        </div>
    );
};

export default ChatWindow;
