import React from 'react';

import styles from './ChatsList.module.scss';
import ChatPreview from "../ChatPreview/ChatPreview.component";

const ChatsList = ({ chats }) => {
    return (
        <div className={styles['chats-list']}>
            {
                chats && chats.length ? (
                    chats.map(
                        chat => <ChatPreview key={chat} chat={chat} />
                    )
                ) : (
                    <div className={styles['list__no-chats-warning']}>
                        No chats were found!
                    </div>
                )
            }
        </div>
    );
};

export default ChatsList;
