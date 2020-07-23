import React, {useEffect} from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

import styles from './AuthPage.module.scss';

import {ConnectedSignInForm} from "../../components/SignInForm/SignInForm.containers";
import {ConnectedSignUpForm} from "../../components/SignUpForm/SignUpForm.containers";

import NotFoundPage from "../NotFoundPage/NotFoundPage.page";

const AuthPage = ({ isAuthed }) => {
    const history = useHistory();
    const { path, isExact } = useRouteMatch();

    useEffect(
        () => {
            isAuthed && history.push('/chats');
            isExact && history.push(`${path}/signin`);
        },
        [isAuthed, history, isExact, path]
    );

    return (
        <section className={styles['auth-page']}>
            <Switch>
                <Route exact path={`${path}/signin`}>
                    <ConnectedSignInForm />
                </Route>
                <Route exact path={`${path}/signup`}>
                    <ConnectedSignUpForm />
                </Route>
                <Route path='*'>
                    <NotFoundPage />
                </Route>
            </Switch>
        </section>
    );
};

export default AuthPage;