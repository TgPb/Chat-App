import {chatsTypes} from "./chats.types";

export const setChatInfo = ({ _id, participantsIds, messages, name, description, icon }) => ({
    type: chatsTypes.SET_CHAT_INFO,
    payload: {
        _id,
        participantsIds,
        messages,
        name,
        description,
        icon
    }
});

export const addNewMessageToHistory = ({ to, message }) => ({
    type: chatsTypes.ADD_NEW_MESSAGE,
    payload: {
        to,
        message
    }
});

export const addNewParticipant = ({ to, _id }) => ({
    type: chatsTypes.ADD_NEW_PARTICIPANT,
    payload: {
        to,
        _id
    }
});