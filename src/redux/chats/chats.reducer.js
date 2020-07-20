import {chatsTypes} from "./chats.types";

const DEFAULT_STATE = {};

export const chatsReducer = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case chatsTypes.SET_CHAT_INFO:
            const { id, participants, messages, name, description, isPrivate } = payload;
            return {
                ...state,
                [id]: {
                    id,
                    participants,
                    messages,
                    name,
                    description,
                    isPrivate
                }
            };

        default:
            return state;
    }
}