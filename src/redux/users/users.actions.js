import {usersTypes} from "./users.types";

export const setUserInfo = ({ _id, name, surname, icon }) => ({
    type: usersTypes.SET_USER_INFO,
    payload: {
        _id,
        name,
        surname,
        icon
    }
});

export const setUserOnline = ({ _id }) => ({
    type: usersTypes.SET_USER_ONLINE,
    payload: {
        _id
    }
});

export const setUserOffline = ({ _id }) => ({
    type: usersTypes.SET_USER_OFFLINE,
    payload: {
        _id
    }
});