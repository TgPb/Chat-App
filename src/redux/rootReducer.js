import {combineReducers} from "redux";

import {currentUserReducer} from "./currentUser/currentUser.reducer";
import {usersReducer} from "./users/users.reducer";
import {chatsReducer} from "./chats/chats.reducer";

export const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    users: usersReducer,
    chats: chatsReducer
});