import React, {useEffect} from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

import ChatsPage from "./pages/ChatsPage/ChatsPage.page";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.page";

import {ConnectedAuthPage} from "./pages/AuthPage/AuthPage.containers";
import {ConnectedOnlyForAuthenticated} from "./hocs/OnlyForAuthenticated/OnlyForAuthenticated.containers";
import {connect} from "react-redux";
import {currentUserSignInWithToken} from "./redux/currentUser/auth/data/currentUserAuthData.actions";

const App = ({ signInWithToken }) => {
    const history = useHistory();
    const { isExact } = useRouteMatch();

    useEffect(
        () => {
            signInWithToken()
        },
        [signInWithToken]
    );

    useEffect(
        () => {
            isExact && history.push('/chats');
        },
        [isExact, history]
    );

    return (
        <div className="App">
            <Switch>
                <Route path='/auth'>
                    <ConnectedAuthPage />
                </Route>
                <Route path='/chats'>
                    <ConnectedOnlyForAuthenticated>
                        <ChatsPage />
                    </ConnectedOnlyForAuthenticated>
                </Route>
                <Route path='*'>
                    <NotFoundPage />
                </Route>
            </Switch>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    signInWithToken: () => dispatch(currentUserSignInWithToken())
});

export default connect(
    null,
    mapDispatchToProps
)(App);
