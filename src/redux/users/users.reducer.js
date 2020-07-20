import {usersTypes} from "./users.types";

const DEFAULT_STATE = {
    1: {
        id: '1',
        name: 'Vladimir',
        surname: 'Makeev',
        isOnline: true
    },
    2: {
        id: '2',
        name: 'Kevin',
        surname: 'Thomson',
        isOnline: true
    },
    3: {
        id: '3',
        name: 'Dmitry',
        surname: 'Shirshov',
        isOnline: false
    }
};

export const usersReducer = (state = DEFAULT_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case usersTypes.SET_USER_INFO:
            const { id, name, surname, icon, isOnline } = payload;

            return {
                ...state,
                [id]: {
                    id,
                    name,
                    surname,
                    icon,
                    isOnline
                }
            };

        default:
            return state;
    }
}