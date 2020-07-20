import {combineReducers} from "redux";
import {currentUserChatsReducer} from "./chats/currentUserChats.reducer";
import {currentUserAuthReducer} from "./auth/currentUserAuth.reducer";

export const currentUserReducer = combineReducers({
    auth: currentUserAuthReducer,
    chats: currentUserChatsReducer,
});