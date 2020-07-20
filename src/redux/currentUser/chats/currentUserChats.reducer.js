import {combineReducers} from "redux";

import {currentUserChatsDataReducer} from "./data/currentUserChatsData.reducer";
import {currentUserChatsLoadingReducer} from "./loading/currentUserChatsLoading.reducer";

export const currentUserChatsReducer = combineReducers({
    data: currentUserChatsDataReducer,
    loading: currentUserChatsLoadingReducer,
});