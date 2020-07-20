import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ChatPreview.module.scss';

import UserIconWithStatus from "../UserIconWithStatus/UserIconWithStatus.component";
import ChatPreviewInfo from "../ChatPreviewInfo/ChatPreviewInfo.component";

const ChatPreview = ({ chatId, chatInfo = {} }) => {
    const { isOnline, name, lastMessage, icon } = chatInfo;

    return (
        <NavLink
            exact
            className={styles['chat-preview']}
            activeClassName={styles['chat-preview_active']}
            to={`/chats/${chatId}`}
        >
            <UserIconWithStatus
                className={styles['chat-preview__icon']}
                isOnline={isOnline}
                src={icon}
                size={'50px'}
            />
            <ChatPreviewInfo
                name={name}
                lastMessage={lastMessage}
            />
        </NavLink>
    );
};

export default ChatPreview;