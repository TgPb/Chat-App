import React from 'react';

import styles from './ChatWindow.module.scss';

import {ConnectedChatMessagesHistory} from "../ChatMessagesHistory/ChatMessagesHistory.containers";
import {ConnectedChatWindowHeader} from "../ChatWindowHeader/ChatWindowHeader.containers";
import {ConnectedMessageSender} from "../MessageSender/MessageSender.containers";

const ChatWindow = ({ match: { params : { chatId }} }) => {
    return (
        <div className={styles['chat-window']}>
            <ConnectedChatWindowHeader chatId={chatId} />
            <ConnectedChatMessagesHistory chatId={chatId} />
            <ConnectedMessageSender chatId={chatId} />
        </div>
    );
};

export default ChatWindow;
