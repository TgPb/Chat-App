import {userAuthLoadingTypes} from "./userAuthLoading.types";

export const setUserAuthLoading = () => ({
    type: userAuthLoadingTypes.SET_USER_AUTH_LOADING,
});

export const resetUserAuthLoading = () => ({
    type: userAuthLoadingTypes.RESET_USER_AUTH_LOADING,
});