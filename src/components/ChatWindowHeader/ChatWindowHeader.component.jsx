import React from 'react';

import styles from './ChatWindowHeader.module.scss';

import UserIconWithStatus from "../UserIconWithStatus/UserIconWithStatus.component";
import ChatControlPanel from "../ChatControlPanel/ChatControlPanel.component";

const ChatWindowHeader = ({ chatInfo = {} }) => {
    const { name, description, isOnline, icon, _id } = chatInfo;

    return (
        <header className={styles['chat-window-header']}>
            <UserIconWithStatus
                className={styles['header__chat-icon']}
                isOnline={isOnline}
                src={icon}
                size={'60px'}
                darkBorder
            />
            <div className={styles['header__chat-description']}>
                <span className={styles['description__chat-name']}>
                    { name }
                </span>
                <span className={styles['description__chat-description']}>
                    { description }
                </span>
            </div>
            <ChatControlPanel chatId={_id} className={styles['header__control-panel']} />
        </header>
    );
};

export default ChatWindowHeader;
