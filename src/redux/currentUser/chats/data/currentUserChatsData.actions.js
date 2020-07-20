import {currentUserChatsDataTypes} from "./currentUserChatsData.types";

export const currentUserChatsFetchStart = () => ({
    type: currentUserChatsDataTypes.USER_CHATS_FETCH_START,
});

export const currentUserChatsFetchSuccess = ({ chatIds }) => ({
    type: currentUserChatsDataTypes.USER_CHATS_FETCH_START,
    payload: {
        chatIds,
    }
});