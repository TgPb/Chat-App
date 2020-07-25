import React from 'react';
import classNames from 'classnames';

import styles from './ChatControlPanel.module.scss'
import {ConnectedParticipantsList} from "../ParticipantsList/ParticipantsList.containers";

const ChatControlPanel = ({ className, chatId }) => {
    const panelStyles = classNames(
        styles['chat-control-panel'],
        {
            [className]: className
        }
    );

    return (
        <div className={panelStyles}>
            <ConnectedParticipantsList chatId={chatId} />
            <div className={styles['splitter']} />
        </div>
    );
};

export default ChatControlPanel;
