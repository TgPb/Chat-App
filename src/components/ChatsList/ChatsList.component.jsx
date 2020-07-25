import React, {useCallback} from 'react';
import { useHistory } from 'react-router-dom';

import styles from './ChatsList.module.scss';

import {ConnectedChatPreview} from "../ChatPreview/ChatPreview.containers";
import Button from "../Button/Button.component";

const ChatsList = ({ chatsIds }) => {
    const history = useHistory();

    const handleCreate = useCallback(
        () => {
            history.push('/chats/create');
        },
        [history]
    );

    return (
        <div className={styles['chats-list']}>
            <Button
                className={styles['list__btn-create']}
                onCLick={handleCreate}
                color='white'
            >
                Create chat
            </Button>
            {
                chatsIds && chatsIds.length ? (
                    chatsIds.map(
                        id => <ConnectedChatPreview key={id} chatId={id} />
                    )
                ) : (
                    <div className={styles['list__no-chats-warning']}>
                        No chats were found!
                    </div>
                )
            }
        </div>
    );
};

export default ChatsList;
