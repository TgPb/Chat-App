import React, {useEffect} from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

import styles from './AuthPage.module.scss';
import NotFoundPage from "../NotFoundPage/NotFoundPage.page";

const AuthPage = ({ user }) => {
    const history = useHistory();
    const { path, isExact } = useRouteMatch();

    useEffect(
        () => {
            user && history.push('/chats');
            isExact && history.push(`${path}/signin`);
        },
        [user, history, isExact, path]
    );

    return (
        <section className={styles['auth-page']}>
            <Switch>
                <Route exact path={`${path}/signin`} render={()=><div>Sign In Form</div>} />
                <Route exact path={`${path}/signup`} render={()=><div>Sign Up Form</div>} />
                <Route path='*'>
                    <NotFoundPage />
                </Route>
            </Switch>
        </section>
    );
};

export default AuthPage;