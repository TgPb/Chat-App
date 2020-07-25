import {combineReducers} from "redux";

import {currentUserChatsReducer} from "./chats/currentUserChats.reducer";
import {currentUserAuthReducer} from "./auth/currentUserAuth.reducer";
import {currentUserInviteReducer} from "./invite/currentUserInvite.reducer";

export const currentUserReducer = combineReducers({
    auth: currentUserAuthReducer,
    chats: currentUserChatsReducer,
    invite: currentUserInviteReducer
});