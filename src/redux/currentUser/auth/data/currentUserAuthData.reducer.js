import {currentUserAuthDataTypes} from "./currentUserAuthData.types";

const DEFAULT_STATE = null;

export const currentUserAuthDataReducer = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case currentUserAuthDataTypes.USER_SIGN_IN_SUCCESS:
            const { id, token } = payload;

            return {
                id,
                token
            };

        case currentUserAuthDataTypes.USER_SIGN_OUT_SUCCESS:
            return DEFAULT_STATE;

        default:
            return state;
    }
};