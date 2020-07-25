import React, {useCallback, useRef, useState} from 'react';

import styles from './MessageSender.module.scss';

import { ReactComponent as SendIcon } from '../../assets/img/send-icon.svg';

import MessageInput from "../MessageInput/MessageInput.component";

const MessageSender = ({ chatId, sendMessage }) => {
    const [message, setMessage] = useState('');

    const inputRef = useRef(null);

    const handleInput = value => {
        setMessage(value);
    };

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();
            if (message) {
                const trimmed = message.trim();
                sendMessage({ to: chatId, text: trimmed });
                inputRef.current.innerText = '';
                setMessage('');
            }
        },
        [message, chatId, sendMessage]
    );

    return (
        <form
            onSubmit={handleSubmit}
            className={styles['message-sender']}
        >
            <MessageInput
                ref={inputRef}
                className={styles['message-sender__input']}
                handleInput={handleInput}
            />
            <button
                className={styles['message-sender__submit']}
                type='submit'
            >
                <SendIcon className={styles['submit__icon']} />
            </button>
        </form>
    );
};

export default MessageSender;
