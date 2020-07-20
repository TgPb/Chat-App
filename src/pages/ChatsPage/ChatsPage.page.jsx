import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import styles from './ChatsPage.module.scss';

import NotFoundPage from "../NotFoundPage/NotFoundPage.page";
import NoChatSelectedWindow from "../../components/NoChatSelectedWindow/NoChatSelectedWindow.component";
import ChatWindow from "../../components/ChatWindow/ChatWindow.component";

import {ConnectedChatsList} from "../../components/ChatsList/ChatsList.containers";

const ChatsPage = () => {
    const { path } = useRouteMatch();

    return (
        <section className={styles['chats-page']}>
            <Route exact path={[`${path}`, `${path}/:chatId`]}>
                <ConnectedChatsList />
            </Route>
            <Switch>
                <Route exact path={`${path}`}>
                    <NoChatSelectedWindow />
                </Route>
                <Route exact path={`${path}/:chatId`} component={ChatWindow} />
                <Route path='*'>
                    <NotFoundPage />
                </Route>
            </Switch>
        </section>
    );
};

export default ChatsPage;