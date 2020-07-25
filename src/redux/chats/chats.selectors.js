import {createSelector} from "reselect";

import {selectCurrentUserId} from "../currentUser/currentUser.selectors";
import {selectUsers} from "../users/users.selectors";

import {denormalizeData} from "../../utils/normalize";

// returns chats state
export const selectChats = state => state.chats;

// returns specific chat by id
export const selectChat = _id => createSelector(
    [selectChats],
    chats => chats[_id]
);

// returns unmodified chat messages as an array
export const selectChatMessages = _id => createSelector(
    [selectChat(_id)],
    chat => chat.messages
);

// returns chat participants ids as an array
export const selectChatParticipantsIds = _id => createSelector(
    [selectChat(_id)],
    chat => chat.participants
);

// returns chat participants objects as an array
export const selectChatParticipants = _id => createSelector(
    [selectUsers, selectChatParticipantsIds(_id)],
    (users, participantsIds) => denormalizeData(users).filter(
        user => participantsIds.includes(user._id)
    )
);

// calculates chat status depending on chat type (private or not) as boolean
export const selectChatStatus = _id => createSelector(
    [selectCurrentUserId, selectChat(_id), selectChatParticipants(_id)],
    (userId, chat, participants) => {
        // looking for anyone online except currentUser
        return participants.some(
            participant => participant._id !== userId && participant.isOnline
        );
    }
);

// returns needed data for chat preview
export const selectChatPreviewInfo = _id => createSelector(
    [selectCurrentUserId, selectChat(_id), selectChatParticipants(_id), selectChatStatus(_id)],
    (userId, chat, participants, status) => {
        const { name, messages, icon, description } = chat;

        const lastMessage = messages.length ? messages[messages.length - 1] : {};
        const { from, date, text, isSystem } = lastMessage;

        // getting sender (system message - null, currentUser - 'You', anyone else - users's name)
        const getSender = () => {
            if (isSystem) return null;
            if (userId === from) return 'You';
            return participants.find(
                participant => participant._id === from
            ).name;
        };

        return {
            _id,
            name,
            icon,
            isOnline: status,
            description,
            lastMessage: {
                sender: messages.length ? getSender() : null,
                date,
                text
            }
        };
    }
);

// return modified chat messages with isMine property and sender object
export const selectChatHistory = id => createSelector(
    [selectCurrentUserId, selectChatMessages(id), selectUsers],
    (userId, messages, users) => messages.map(
        message => ({
            ...message,
            isMine: message.from === userId,
            from: message.from && {
                ...users[message.from]
            }
        })
    )
);