import {combineReducers} from "redux";

import {userChatsDataReducer} from "./data/userChatsData.reducer";
import {userChatsLoadingReducer} from "./loading/userChatsLoading.reducer";

export const userChatsReducer = combineReducers({
    data: userChatsDataReducer,
    loading: userChatsLoadingReducer,
});