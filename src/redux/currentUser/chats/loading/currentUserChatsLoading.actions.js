import {currentUserChatsLoadingTypes} from "./currentUserChatsLoading.types";

export const setCurrentUserAuthLoading = () => ({
    type: currentUserChatsLoadingTypes.SET_USER_CHATS_LOADING,
});

export const resetCurrentUserAuthLoading = () => ({
    type: currentUserChatsLoadingTypes.RESET_USER_CHATS_LOADING,
});