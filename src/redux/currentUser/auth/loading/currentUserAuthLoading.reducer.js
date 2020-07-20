import {currentUserAuthLoadingTypes} from "./currentUserAuthLoading.types";

const DEFAULT_STATE = false;

export const currentUserAuthLoadingReducer = (state = DEFAULT_STATE, action) => {
    const {type} = action;

    switch (type) {
        case currentUserAuthLoadingTypes.SET_USER_AUTH_LOADING:
            return true;

        case currentUserAuthLoadingTypes.RESET_USER_AUTH_LOADING:
            return false;

        default:
            return state;
    }
};