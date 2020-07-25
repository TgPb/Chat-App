import {createSelector} from "reselect";

import { selectUsers } from '../users/users.selectors';

export const selectCurrentUser = state => state.currentUser;

export const selectCurrentUserInvite = createSelector(
    [selectCurrentUser],
    currentUser => currentUser.invite
);

export const selectCurrentUserAuthState = createSelector(
    [selectCurrentUser],
    currentUser => currentUser.auth
);

export const selectCurrentUserAuthData = createSelector(
    [selectCurrentUserAuthState],
    auth => auth.data
);

export const selectCurrentUserId = createSelector(
    [selectCurrentUserAuthData],
    data => data._id
);

export const selectCurrentUserToken = createSelector(
    [selectCurrentUserAuthData],
    data => data.token
);

export const selectCurrentUserAuthLoading = createSelector(
    [selectCurrentUserAuthState],
    auth => auth.loading
);

export const selectCurrentUserChatsState = createSelector(
    [selectCurrentUser],
    currentUser => currentUser.chats
);

export const selectCurrentUserChatsIds = createSelector(
    [selectCurrentUserChatsState],
    chats => chats.data
);

export const selectCurrentUserChatsLoading = createSelector(
    [selectCurrentUserChatsState],
    chats => chats.loading
);

export const selectCurrentUserInfo = createSelector(
    [selectCurrentUserId, selectUsers],
    (id, users) => users[id]
);