import React from 'react';
import classNames from 'classnames';

import styles from './MessageBubble.module.scss';

const MessageBubble = ({ isMine, text }) => {
    const bubbleStyles = classNames(
        styles['message-bubble'],
        {
            [styles['message-bubble_mine']]: isMine
        }
    );

    return (
        <div className={bubbleStyles}>
            <p className={styles['message-bubble__text']}>
                { text }
            </p>
        </div>
    );
};

export default MessageBubble;
