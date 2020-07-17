import React from 'react';

import styles from './ChatsList.module.scss';

const ChatsList = ({ chats }) => {
    return (
        <div className={styles['chats-list']}>
            {
                chats && chats.length ? (
                    chats.map(
                        (chat, index) => <div key={index}>chat { index + 1 }</div>
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
