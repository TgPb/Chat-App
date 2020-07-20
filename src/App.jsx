import React, {useEffect} from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

import ChatsPage from "./pages/ChatsPage/ChatsPage.page";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.page";

import {ConnectedAuthPage} from "./pages/AuthPage/AuthPage.containers";
import {ConnectedOnlyForAuthenticated} from "./hocs/OnlyForAuthenticated/OnlyForAuthenticated.containers";

// const SecuredChatsPage = ConnectedOnlyForAuthenticated(ChatsPage);

const App = () => {
    const history = useHistory();
    const { isExact } = useRouteMatch();

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
                    {/*<SecuredChatsPage />*/}
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

export default App;
