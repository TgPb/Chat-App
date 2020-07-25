import React, {useEffect} from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import {connect} from "react-redux";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.page";

import {ConnectedAuthPage} from "./pages/AuthPage/AuthPage.containers";
import {ConnectedOnlyForAuthenticated} from "./hocs/OnlyForAuthenticated/OnlyForAuthenticated.containers";
import {ConnectedChatsPage} from "./pages/ChatsPage/ChatsPage.containers";

import {currentUserSignInWithToken} from "./redux/currentUser/auth/data/currentUserAuthData.actions";
import {ConnectedInvitePage} from "./pages/InvitePage/InvitePage.containers";

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
                <Route exact path={`/invite/:invite`} component={ConnectedInvitePage} />
                <Route path='/auth'>
                    <ConnectedAuthPage />
                </Route>
                <Route path='/chats'>
                    <ConnectedOnlyForAuthenticated>
                        <ConnectedChatsPage />
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
