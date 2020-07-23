import {
    all,
    call
} from 'redux-saga/effects';

import {currentUserSaga} from "./currentUser/currentUser.saga";

export function* rootSaga() {
    yield all([
        call(currentUserSaga)
    ]);
}