import {chatsNamespaceEvents} from "./chatsNamespace.events";

export const connectedToChats = () => ({
    type: chatsNamespaceEvents.CONNECT
});

export const chatsFetchSuccess = ({ chats }) => ({
    type: chatsNamespaceEvents.CHATS_FETCH_SUCCESS,
    payload: {
        chats
    }
});

export const createChatSuccess = ({ chat }) => ({
    type: chatsNamespaceEvents.CREATE_CHAT_SUCCESS,
    payload: {
        chat
    }
})

export const newMessage = ({ to, message }) => ({
    type: chatsNamespaceEvents.NEW_MESSAGE,
    payload: {
        to,
        message
    }
});

export const participantOnline = ({ _id }) => ({
    type: chatsNamespaceEvents.PARTICIPANT_ONLINE,
    payload: {
        _id
    }
});

export const participantOffline = ({ _id }) => ({
    type: chatsNamespaceEvents.PARTICIPANT_OFFLINE,
    payload: {
        _id
    }
});

export const addParticipant = ({ to, participant }) => ({
    type: chatsNamespaceEvents.NEW_PARTICIPANT,
    payload: {
        to,
        participant
    }
});