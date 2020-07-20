import {chatsTypes} from "./chats.types";

export const setChatInfo = ({ id, participants, messages, name, description, isPrivate }) => ({
    type: chatsTypes.SET_CHAT_INFO,
    payload: {
        id,
        participants,
        messages,
        name,
        description,
        isPrivate
    }
});