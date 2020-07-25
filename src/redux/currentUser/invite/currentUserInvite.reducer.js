import {currentUserInviteTypes} from "./currentUserInvite.types";

const DEFAULT_STATE = null;

export const currentUserInviteReducer = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case currentUserInviteTypes.SET_INVITE:
            const { invite } = payload;

            return invite;

        case currentUserInviteTypes.RESET_INVITE:
            return DEFAULT_STATE;

        default:
            return state;
    }
}