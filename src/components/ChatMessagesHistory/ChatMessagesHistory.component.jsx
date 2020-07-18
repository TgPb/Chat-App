import React from 'react';

import styles from './ChatMessagesHistory.module.scss';
import Message from "../Message/Message.component";

const ChatMessagesHistory = ({ messages }) => {
    return (
        <div className={styles['chat-messages-history']}>
            {
                messages && messages.length ? (
                    messages.map(
                        (message, index) => <Message key={index} message={message} />
                    )
                ) : (
                    <p className={styles['no-messages-warning']}>
                        Chat history is clear.
                        <br/>
                        You have an opportunity to be the 1st one!
                    </p>
                )
            }
        </div>
    );
};

export default ChatMessagesHistory;
