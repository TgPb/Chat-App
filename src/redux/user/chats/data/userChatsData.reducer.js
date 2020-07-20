import {userChatsDataTypes} from "./userChatsData.types";

const DEFAULT_STATE = [];

export const userChatsDataReducer = (state = DEFAULT_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case userChatsDataTypes.USER_CHATS_FETCH_SUCCESS:
            const { chatIds } = payload;
            return [...chatIds];

        default:
            return state;
    }
};