import {currentUserAuthDataTypes} from "./currentUserAuthData.types";

export const currentUserSignInWithToken = () => ({
    type: currentUserAuthDataTypes.USER_SIGN_IN_WITH_TOKEN
});

export const currentUserSignInStart = ({ email, password }) => ({
    type: currentUserAuthDataTypes.USER_SIGN_IN_START,
    payload: {
        email,
        password
    }
});

export const currentUserSignInSuccess = ({ id, token }) => ({
    type: currentUserAuthDataTypes.USER_SIGN_IN_SUCCESS,
    payload: {
        id,
        token
    }
});

export const currentUserSignUpStart = ({ email, password, name, surname, icon }) => ({
    type: currentUserAuthDataTypes.USER_SIGN_UP_START,
    payload: {
        email,
        password,
        name,
        surname,
        icon
    }
});

export const currentUserSignUpSuccess = () => ({
    type: currentUserAuthDataTypes.USER_SIGN_UP_SUCCESS,
});

export const currentUserSignOutStart = () => ({
    type: currentUserAuthDataTypes.USER_SIGN_OUT_START,
});

export const currentUserSignOutSuccess = () => ({
    type: currentUserAuthDataTypes.USER_SIGN_OUT_SUCCESS,
});