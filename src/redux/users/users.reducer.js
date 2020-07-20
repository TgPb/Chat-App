import {usersTypes} from "./users.types";

const DEFAULT_STATE = {};

export const usersReducer = (state = DEFAULT_STATE, action) => {
    const {type, payload} = action;

    const { id, name, surname, icon } = payload;

    switch (type) {
        case usersTypes.SET_USER_INFO:
            return {
                ...state,
                [id]: {
                    id,
                    name,
                    surname,
                    icon
                }
            };

        default:
            return state;
    }
}