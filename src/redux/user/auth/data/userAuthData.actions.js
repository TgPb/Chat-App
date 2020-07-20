import {userAuthDataTypes} from "./userAuthData.types";

export const userAuthWithToken = () => ({
    type: userAuthDataTypes.USER_SIGN_IN_WITH_TOKEN
});

export const userSignInStart = ({ email, password }) => ({
    type: userAuthDataTypes.USER_SIGN_IN_START,
    payload: {
        email,
        password
    }
});

export const userSignInSuccess = ({ id }) => ({
    type: userAuthDataTypes.USER_SIGN_IN_SUCCESS,
    payload: {
        id,
    }
});

export const userSignUpStart = ({ email, password, name, surname, icon }) => ({
    type: userAuthDataTypes.USER_SIGN_UP_START,
    payload: {
        email,
        password,
        name,
        surname,
        icon
    }
});

export const userSignUpSuccess = () => ({
    type: userAuthDataTypes.USER_SIGN_UP_SUCCESS,
});

export const userSignOutStart = () => ({
    type: userAuthDataTypes.USER_SIGN_OUT_START,
});

export const userSignOutSuccess = () => ({
    type: userAuthDataTypes.USER_SIGN_OUT_SUCCESS,
});