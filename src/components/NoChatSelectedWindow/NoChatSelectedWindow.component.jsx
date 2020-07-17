import React from 'react';

import styles from './NoChatSelectedWindow.module.scss';

import { ReactComponent as MessageImg } from '../../assets/img/message.svg';

const NoChatSelectedWindow = () => {
    return (
        <div className={styles['no-chat-selected-window']}>
            <MessageImg className={styles['window__img']} />
            <span className={styles['window__message']}>
                Please select any chat or create a new one.
            </span>
        </div>
    );
};

export default NoChatSelectedWindow;
