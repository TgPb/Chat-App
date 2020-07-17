import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import styles from './ChatsPage.module.scss';

import ChatsList from "../../components/ChatsList/ChatsList.component";
import NotFoundPage from "../NotFoundPage/NotFoundPage.page";

const ChatsPage = () => {
    const { path } = useRouteMatch();

    return (
        <section className={styles['chats-page']}>
            <Route exact path={[`${path}`, `${path}/:chatId`]}>
                <ChatsList />
            </Route>
            <Switch>
                <Route exact path={`${path}`} render={()=><div>Please select any chat or create a new one.</div>} />
                <Route exact path={`${path}/:chatId`} render={({ match: { params: { chatId } } })=><div>Chat { chatId }</div>} />
                <Route path='*'>
                    <NotFoundPage />
                </Route>
            </Switch>
        </section>
    );
};

export default ChatsPage;