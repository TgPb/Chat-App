import {userChatsLoadingTypes} from "./userChatsLoading.types";

const DEFAULT_STATE = false;

export const userChatsLoadingReducer = (state = DEFAULT_STATE, action) => {
    const {type} = action;

    switch (type) {
        case userChatsLoadingTypes.SET_USER_CHATS_LOADING:
            return true;

        case userChatsLoadingTypes.RESET_USER_CHATS_LOADING:
            return false;

        default:
            return state;
    }
};