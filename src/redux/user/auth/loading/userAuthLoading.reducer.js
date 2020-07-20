import {userAuthLoadingTypes} from "./userAuthLoading.types";

const DEFAULT_STATE = false;

export const userAuthLoadingReducer = (state = DEFAULT_STATE, action) => {
    const {type} = action;

    switch (type) {
        case userAuthLoadingTypes.SET_USER_AUTH_LOADING:
            return true;

        case userAuthLoadingTypes.RESET_USER_AUTH_LOADING:
            return false;

        default:
            return state;
    }
};