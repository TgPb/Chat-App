import React, {Fragment, useEffect, useState} from 'react';
import classNames from 'classnames';

import styles from './Message.module.scss';

import UserIcon from "../UserIcon/UserIcon.component";
import MessageBubble from "../MessageBubble/MessageBubble.component";

import {formatDate} from '../../utils/dates';

const Message = ({ message }) => {
    const { text, isSystem, isMine, date, from = {} } = message;

    const { icon, name, surname } = from;

    const [dateData, setDateData] = useState(formatDate(date));

    const { formattedDate, needUpdate } = dateData;

    useEffect(
        () => {
            if (!isSystem && needUpdate) {
                const interval = setTimeout(
                    () => {
                        setDateData(formatDate(date));
                    },
                    1000
                );
                return () => {
                    clearTimeout(interval);
                }
            }
        },
        [date, needUpdate, isSystem]
    );

    const messageStyles = classNames(
        styles['message'],
        {
            [styles['message_mine']]: isMine
        },
        {
            [styles['message_system']]: isSystem
        }
    );

    return (
        <div className={messageStyles}>
            {
                isSystem ? (
                    <p className={styles['system-message__text']}>
                        { text }
                    </p>
                ) : (
                    <Fragment>
                        <UserIcon
                            className={styles['message__sender-icon']}
                            src={icon}
                            size={'50px'}
                            darkBorder
                        />
                        <div className={styles['message__content']}>
                            <div className={styles['content__info']}>
                                <span className={styles['info__sender']}>
                                    { name } { surname }
                                </span>
                                <span className={styles['info__date']}>
                                    { formattedDate }
                                </span>
                            </div>
                            <MessageBubble isMine={isMine} text={text} />
                        </div>
                    </Fragment>
                )
            }
        </div>
    );
};

export default Message;
