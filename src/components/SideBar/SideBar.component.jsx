import React, {useCallback} from 'react';
import {useHistory} from "react-router-dom";

import styles from './SideBar.module.scss';

import Button from "../Button/Button.component";

import {ConnectedChatsList} from "../ChatsList/ChatsList.containers";
import {ConnectedUserCard} from "../UserCard/UserCard.containers";

const SideBar = () => {
    const history = useHistory();

    const handleCreate = useCallback(
        () => {
            history.push('/chats/create');
        },
        [history]
    );

    return (
        <div className={styles['sidebar']}>
            <ConnectedUserCard />
            <Button
                className={styles['sidebar__btn-create']}
                onCLick={handleCreate}
                color='white'
            >
                Create chat
            </Button>
            <ConnectedChatsList />
        </div>
    );
};

export default SideBar;
