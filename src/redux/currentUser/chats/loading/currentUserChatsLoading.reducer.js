import {currentUserChatsLoadingTypes} from "./currentUserChatsLoading.types";

const DEFAULT_STATE = false;

export const currentUserChatsLoadingReducer = (state = DEFAULT_STATE, action) => {
    const {type} = action;

    switch (type) {
        case currentUserChatsLoadingTypes.SET_USER_CHATS_LOADING:
            return true;

        case currentUserChatsLoadingTypes.RESET_USER_CHATS_LOADING:
            return false;

        default:
            return state;
    }
};