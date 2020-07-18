import React from 'react';
import classNames from 'classnames';

import styles from './ChatControlPanel.module.scss'

const ChatControlPanel = ({ className }) => {
    const panelStyles = classNames(
        styles['chat-control-panel'],
        {
            [className]: className
        }
    );

    return (
        <div className={panelStyles}>
            <div>
                Chat Control Panel
            </div>
            <div className={styles['splitter']} />
        </div>
    );
};

export default ChatControlPanel;
