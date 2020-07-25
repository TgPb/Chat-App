import React from 'react';

import styles from './ChatsList.module.scss';

import {ConnectedChatPreview} from "../ChatPreview/ChatPreview.containers";

const ChatsList = ({ chatsIds }) => {
    return (
        <div className={styles['chats-list']}>
            {
                chatsIds && chatsIds.length ? (
                    chatsIds.map(
                        id => <ConnectedChatPreview key={id} chatId={id} />
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
