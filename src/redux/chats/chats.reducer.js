import {chatsTypes} from "./chats.types";

const DEFAULT_STATE = {};

export const chatsReducer = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case chatsTypes.SET_CHAT_INFO:
            const { _id, participantsIds, messages, name, description, icon } = payload;
            return {
                ...state,
                [_id]: {
                    _id,
                    participants: [...participantsIds],
                    messages,
                    name,
                    description,
                    icon
                }
            };

        case chatsTypes.ADD_NEW_MESSAGE:
            const { to, message } = payload;

            return {
                ...state,
                [to]: {
                    ...state[to],
                    messages: [
                        ...state[to].messages,
                        message
                    ]
                }
            };

        default:
            return state;
    }
}