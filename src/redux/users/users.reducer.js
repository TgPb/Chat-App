import {usersTypes} from "./users.types";

const DEFAULT_STATE = {};

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