import React, {useEffect, useRef, Fragment} from 'react';

import styles from './ChatMessagesHistory.module.scss';
import Message from "../Message/Message.component";

const ChatMessagesHistory = ({ messages }) => {
    const historyEndRef = useRef(null);

    useEffect(
        () => {
            historyEndRef.current.scrollIntoView({ behavior: 'smooth' });
        },
        []
    );

    return (
        <div className={styles['chat-messages-history']}>
            {
                messages && messages.length ? (
                    <Fragment>
                        {
                            messages.map(
                                (message, index) => <Message key={index} message={message}/>
                            )
                        }
                        <div ref={historyEndRef} />
                    </Fragment>
                ) : (
                    <p className={styles['no-messages-warning']}>
                        Chat history is clear.
                        <br/>
                        You have an opportunity to be the 1st one!
                    </p>
                )
            }
        </div>
    );
};

export default ChatMessagesHistory;
