import {userChatsDataTypes} from "./userChatsData.types";

export const userChatsFetchStart = () => ({
    type: userChatsDataTypes.USER_CHATS_FETCH_START,
});

export const userChatsFetchSuccess = ({ chatIds }) => ({
    type: userChatsDataTypes.USER_CHATS_FETCH_START,
    payload: {
        chatIds,
    }
});