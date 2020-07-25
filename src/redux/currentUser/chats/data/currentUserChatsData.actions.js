import {currentUserChatsDataTypes} from "./currentUserChatsData.types";

export const connectToChatsSocket = () => ({
    type: currentUserChatsDataTypes.CONNECT_TO_CHATS_SOCKET,
});

export const currentUserChatsFetchStart = () => ({
    type: currentUserChatsDataTypes.USER_CHATS_FETCH_START,
});

export const currentUserChatsFetchSuccess = ({ chatIds }) => ({
    type: currentUserChatsDataTypes.USER_CHATS_FETCH_SUCCESS,
    payload: {
        chatIds,
    }
});

export const createChat = ({ name, description, icon, history }) => ({
    type: currentUserChatsDataTypes.CREATE_NEW_CHAT,
    payload: {
        name,
        description,
        icon,
        history
    }
});

export const currentUserNewChat = ({ chatId }) => ({
    type: currentUserChatsDataTypes.NEW_CHAT,
    payload: {
        chatId
    }
});

export const sendMessage = ({ to, text }) => {
    console.log({ to, text });
    return {
        type:currentUserChatsDataTypes.SEND_MESSAGE,
        payload: {
            to,
            text
        }
    }
};