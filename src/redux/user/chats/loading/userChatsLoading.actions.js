import {userChatsLoadingTypes} from "./userChatsLoading.types";

export const setUserAuthLoading = () => ({
    type: userChatsLoadingTypes.SET_USER_CHATS_LOADING,
});

export const resetUserAuthLoading = () => ({
    type: userChatsLoadingTypes.RESET_USER_CHATS_LOADING,
});