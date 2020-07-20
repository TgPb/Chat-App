import {combineReducers} from "redux";

import {userAuthDataReducer} from "./data/userAuthData.reducer";
import {userAuthLoadingReducer} from "./loading/userAuthLoading.reducer";

export const userAuthReducer = combineReducers({
    data: userAuthDataReducer,
    loading: userAuthLoadingReducer,
});