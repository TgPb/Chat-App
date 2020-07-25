import React, {useEffect} from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import styles from './ChatsPage.module.scss';

import NotFoundPage from "../NotFoundPage/NotFoundPage.page";

import NoChatSelectedWindow from "../../components/NoChatSelectedWindow/NoChatSelectedWindow.component";
import ChatWindow from "../../components/ChatWindow/ChatWindow.component";
import SideBar from "../../components/SideBar/SideBar.component";

import {ConnectedCreateChatWindow} from "../../components/CreateChatWindow/CreateChatWindow.containers";

const ChatsPage = ({ connectToChatsSocket }) => {
    const { path } = useRouteMatch();

    useEffect(
        () => {
            connectToChatsSocket();
        },
        [connectToChatsSocket]
    );

    return (
        <section className={styles['chats-page']}>
            <Route exact path={[`${path}`, `${path}/:chatId`]}>
                <SideBar />
            </Route>
            <Switch>
                <Route exact path={`${path}`}>
                    <NoChatSelectedWindow />
                </Route>
                <Route exact path={`${path}/create`}>
                    <ConnectedCreateChatWindow />
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