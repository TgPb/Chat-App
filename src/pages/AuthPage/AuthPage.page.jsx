import React, {useEffect} from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

import styles from './AuthPage.module.scss';

import SignInForm from "../../components/SignInForm/SignInForm.component";
import SignUpForm from "../../components/SignUpForm/SignUpForm.component";

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
                    <SignInForm />
                </Route>
                <Route exact path={`${path}/signup`}>
                    <SignUpForm />
                </Route>
                <Route path='*'>
                    <NotFoundPage />
                </Route>
            </Switch>
        </section>
    );
};

export default AuthPage;