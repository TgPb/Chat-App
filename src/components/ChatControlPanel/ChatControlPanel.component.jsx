import React from 'react';
import classNames from 'classnames';

import styles from './ChatControlPanel.module.scss'
import {ConnectedParticipantsList} from "../ParticipantsList/ParticipantsList.containers";
import InviteGenerator from "../InviteGenerator/InviteGenerator.component";

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
            <InviteGenerator chatId={chatId} />
        </div>
    );
};

export default ChatControlPanel;
