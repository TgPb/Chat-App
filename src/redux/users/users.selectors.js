import {createSelector} from "reselect";

export const selectUsers = state => state.users;

export const selectUserInfo = id => createSelector(
    [selectUsers],
    users => users[id]
);