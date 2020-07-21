import {createSelector} from "reselect";

export const selectUsers = state => state.users;

// returns specific user object by id
export const selectUserInfo = id => createSelector(
    [selectUsers],
    users => users[id]
);