import {usersTypes} from "./users.types";

export const setUserInfo = ({ id, name, surname, icon }) => ({
    type: usersTypes.SET_USER_INFO,
    payload: {
        id,
        name,
        surname,
        icon
    }
});