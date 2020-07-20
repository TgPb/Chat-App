import {chatsTypes} from "./chats.types";

const DEFAULT_STATE = {
    1: {
        id: '1',
        name: 'Beerfest',
        description: 'Ideas about the weekend party',
        participants: ['1', '2', '3'],
        messages: [
            {
                text: 'Vladimir Makeev invited Kevin Thomson',
                date: 'Tue Feb 11 2014 01:24:00',
                isSystem: true
            }, {
                from: '1',
                text: 'Hello',
                date: 'Tue Feb 11 2014 01:25:00'
            }, {
                from: '2',
                text: 'Hi',
                date: 'Tue Feb 11 2014 01:26:00'
            }
        ]
    },
    2: {
        id: '2',
        isPrivate: true,
        participants: ['1', '3'],
        messages: [
            {
                from: '1',
                text: 'Hello',
                date: 'Tue Feb 11 2014 01:25:00'
            }, {
                from: '3',
                text: 'Hi',
                date: 'Tue Feb 11 2014 01:26:00'
            }
        ]
    }
};

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