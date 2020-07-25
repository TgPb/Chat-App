import {usersTypes} from "./users.types";

const DEFAULT_STATE = {};

export const usersReducer = (state = DEFAULT_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case usersTypes.SET_USER_INFO:
            const { _id, name, surname, icon } = payload;

            return {
                ...state,
                [_id]: {
                    _id,
                    name,
                    surname,
                    icon,
                }
            };

        case usersTypes.SET_USER_ONLINE:
            const { _id: onlineUserId } = payload;

            return {
                ...state,
                [onlineUserId]: {
                    ...state[onlineUserId],
                    isOnline: true
                }
            };

        case usersTypes.SET_USER_OFFLINE:
            const { _id: offlineUserId } = payload;

            return {
                ...state,
                [offlineUserId]: {
                    ...state[offlineUserId],
                    isOnline: false
                }
            };

        default:
            return state;
    }
}