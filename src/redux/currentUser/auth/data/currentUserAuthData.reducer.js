import {currentUserAuthDataTypes} from "./currentUserAuthData.types";

const DEFAULT_STATE = {};

export const currentUserAuthDataReducer = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case currentUserAuthDataTypes.USER_SIGN_IN_SUCCESS:
            const { _id, token } = payload;

            return {
                ...state,
                _id,
                token
            };

        case currentUserAuthDataTypes.USER_SIGN_OUT_SUCCESS:
            return DEFAULT_STATE;

        default:
            return state;
    }
};