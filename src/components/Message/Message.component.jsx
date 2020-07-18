import React, {Fragment, useEffect, useState} from 'react';
import classNames from 'classnames';

import styles from './Message.module.scss';

import UserIcon from "../UserIcon/UserIcon.component";
import MessageBubble from "../MessageBubble/MessageBubble.component";

import {formatDate} from '../../utils/dates';

const Message = ({ message }) => {
    const { text, system, isMine, date = Date.now() } = message;

    const [formattedDate, setFormattedDate] = useState(formatDate(date));

    useEffect(
        () => {
            const interval = setInterval(
                () => {
                    setFormattedDate(formatDate(date));
                },
                1000 * 60
            );
            return () => {
                clearInterval(interval);
            }
        },
        [date]
    );

    const messageStyles = classNames(
        styles['message'],
        {
            [styles['message_mine']]: isMine
        },
        {
            [styles['message_system']]: system
        }
    );

    return (
        <div className={messageStyles}>
            {
                system ? (
                    <p className={styles['system-message__text']}>
                        { text }
                    </p>
                ) : (
                    <Fragment>
                        <UserIcon
                            className={styles['message__sender-icon']}
                            src={'data:image/jpeg;base64,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'}
                            size={'40px'}
                            darkBorder
                        />
                        <div className={styles['message__content']}>
                            <div className={styles['content__info']}>
                                <span className={styles['info__sender']}>
                                    Kevin Thomson
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