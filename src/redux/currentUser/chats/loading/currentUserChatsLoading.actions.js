import {currentUserChatsLoadingTypes} from "./currentUserChatsLoading.types";

export const setCurrentUserChatsLoading = () => ({
    type: currentUserChatsLoadingTypes.SET_USER_CHATS_LOADING,
});

export const resetCurrentUserChatsLoading = () => ({
    type: currentUserChatsLoadingTypes.RESET_USER_CHATS_LOADING,
});