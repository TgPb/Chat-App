import {combineReducers} from "redux";

import {currentUserAuthDataReducer} from "./data/currentUserAuthData.reducer";
import {currentUserAuthLoadingReducer} from "./loading/currentUserAuthLoading.reducer";

export const currentUserAuthReducer = combineReducers({
    data: currentUserAuthDataReducer,
    loading: currentUserAuthLoadingReducer,
});