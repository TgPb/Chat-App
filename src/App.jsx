import React, {useEffect} from 'react';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';

import AuthPage from "./pages/AuthPage/AuthPage.page";
import ChatsPage from "./pages/ChatsPage/ChatsPage.page";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.page";
import OnlyForAuthenticated from "./hocs/OnlyForAuthenticated/OnlyForAuthenticated.hoc";

const SecuredChatsPage = OnlyForAuthenticated(ChatsPage);

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
                    <AuthPage />
                </Route>
                <Route path='/chats'>
                    <SecuredChatsPage user />
                </Route>
                <Route path='*'>
                    <NotFoundPage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
