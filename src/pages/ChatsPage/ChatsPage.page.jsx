import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import styles from './ChatsPage.module.scss';

import ChatsList from "../../components/ChatsList/ChatsList.component";
import NotFoundPage from "../NotFoundPage/NotFoundPage.page";
import NoChatSelectedWindow from "../../components/NoChatSelectedWindow/NoChatSelectedWindow.component";

const chats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const ChatsPage = () => {
    const { path } = useRouteMatch();

    return (
        <section className={styles['chats-page']}>
            <Route exact path={[`${path}`, `${path}/:chatId`]}>
                <ChatsList chats={chats} />
            </Route>
            <Switch>
                <Route exact path={`${path}`}>
                    <NoChatSelectedWindow />
                </Route>
                <Route exact path={`${path}/:chatId`} render={({ match: { params: { chatId } } })=><div>Chat { chatId }</div>} />
                <Route path='*'>
                    <NotFoundPage />
                </Route>
            </Switch>
        </section>
    );
};

export default ChatsPage;