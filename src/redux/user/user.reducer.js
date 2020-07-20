import {combineReducers} from "redux";
import {userChatsReducer} from "./chats/userChats.reducer";
import {userAuthReducer} from "./auth/userAuth.reducer";

export const userReducer = combineReducers({
    auth: userAuthReducer,
    chats: userChatsReducer,
});