import {currentUserChatsDataTypes} from "./currentUserChatsData.types";

const DEFAULT_STATE = ['1', '2'];

export const currentUserChatsDataReducer = (state = DEFAULT_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case currentUserChatsDataTypes.USER_CHATS_FETCH_SUCCESS:
            const { chatIds } = payload;
            return [...chatIds];

        default:
            return state;
    }
};