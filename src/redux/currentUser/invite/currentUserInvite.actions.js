import {currentUserInviteTypes} from "./currentUserInvite.types";

export const setCurrentUserInvite = ({ invite }) => ({
    type: currentUserInviteTypes.SET_INVITE,
    payload: {
        invite
    }
});

export const resetCurrentUserInvite = () => ({
    type: currentUserInviteTypes.RESET_INVITE
});