import React, {useCallback} from 'react';
import axios from 'axios';

import styles from './InviteGenerator.module.scss';

const InviteGenerator = ({ chatId }) => {
    const handleClick = useCallback(
        async () => {
            const response = await axios.post(
                '/chats/invite',
                {
                    chatId
                },
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            const { invite } = response.data;
            await navigator.clipboard.writeText(`localhost:3000/invite/${invite}`);
            alert('Link was copied');
        },
        [chatId]
    );

    return (
        <div
            onClick={handleClick}
            className={styles['invite-generator']}
        >
            <span className={styles['generator__label']}>
                Invite
            </span>
        </div>
    );
};

export default InviteGenerator;
