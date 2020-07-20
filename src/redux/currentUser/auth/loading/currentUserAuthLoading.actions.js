import {currentUserAuthLoadingTypes} from "./currentUserAuthLoading.types";

export const setCurrentUserAuthLoading = () => ({
    type: currentUserAuthLoadingTypes.SET_USER_AUTH_LOADING,
});

export const resetCurrentUserAuthLoading = () => ({
    type: currentUserAuthLoadingTypes.RESET_USER_AUTH_LOADING,
});