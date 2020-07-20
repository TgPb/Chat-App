import {userAuthDataTypes} from "./userAuthData.types";

const DEFAULT_STATE = null;

export const userAuthDataReducer = (state = DEFAULT_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case userAuthDataTypes.USER_SIGN_IN_SUCCESS:
            return payload.id

        case userAuthDataTypes.USER_SIGN_OUT_SUCCESS:
            return null

        default:
            return state;
    }
};