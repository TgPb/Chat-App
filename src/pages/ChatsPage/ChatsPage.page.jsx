import React from 'react';

import styles from './ChatsPage.module.scss';

import ChatsList from "../../components/ChatsList/ChatsList.component";

const ChatsPage = () => {
    return (
        <section className={styles['chats-page']}>
            <ChatsList />
        </section>
    );
};

export default ChatsPage;