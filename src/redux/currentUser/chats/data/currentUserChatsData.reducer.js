import {currentUserChatsDataTypes} from "./currentUserChatsData.types";

const DEFAULT_STATE = [];

export const currentUserChatsDataReducer = (state = DEFAULT_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case currentUserChatsDataTypes.USER_CHATS_FETCH_SUCCESS:
            const { chatIds } = payload;
            return [...chatIds];

        case currentUserChatsDataTypes.NEW_CHAT:
            const { chatId } = payload;
            return [...state, chatId];

        default:
            return state;
    }
};