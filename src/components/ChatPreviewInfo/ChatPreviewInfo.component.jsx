import React, {useEffect, useState} from 'react';
import classNames from 'classnames';

import styles from './ChatPreviewInfo.module.scss';

import { timeDistanceToNowInWords } from '../../utils/dates';

const ChatPreviewInfo = ({ className, name, lastMessage = {} }) => {
    const { sender, date, text } = lastMessage;

    const [formattedDate, setFormattedDate] = useState(timeDistanceToNowInWords(date));

    useEffect(
        () => {
            const interval = setInterval(
                () => {
                    setFormattedDate(timeDistanceToNowInWords(date));
                },
                1000
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
                { formattedDate }
            </span>
            <span className={styles['chat-info__name']}>
                { name }
            </span>
            <p className={styles['chat-info__message']}>
                { sender && `${sender}:` } {text}
            </p>
        </div>
    );
};

export default ChatPreviewInfo;
