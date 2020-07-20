import {userAuthDataTypes} from "./userAuthData.types";

const DEFAULT_STATE = null;

export const userAuthDataReducer = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case userAuthDataTypes.USER_SIGN_IN_SUCCESS:
            const { id, token } = payload;

            return {
                id,
                token
            };

        case userAuthDataTypes.USER_SIGN_OUT_SUCCESS:
            return DEFAULT_STATE;

        default:
            return state;
    }
};