import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import styles from './ChatPreviewInfo.module.scss';

const dateFnsConfig = {
    includeSeconds: true,
    addSuffix: true
};

const formatDate = time => formatDistanceToNow(new Date(time), dateFnsConfig);

const ChatPreviewInfo = ({ className, name, lastMessage }) => {
    const { sender, date, text } = lastMessage;

    const [formatedDate, setFormatedDate] = useState(formatDate(date));

    useEffect(
        () => {
            const interval = setInterval(
                () => {
                    setFormatedDate(formatDate(date));
                },
                5000
            );
            return () => {
                clearInterval(interval);
            }
        },
        [date]
    );

    const infoStyles = classNames(
        styles['chat-preview-info'],
        {
            [className]: className
        }
    );

    return (
        <div className={infoStyles}>
            <span className={styles['chat-info__date']}>
                { formatedDate }
            </span>
            <span className={styles['chat-info__name']}>
                { name }
            </span>
            <p className={styles['chat-info__message']}>
                { sender }: { text }
            </p>
        </div>
    );
};

export default ChatPreviewInfo;
