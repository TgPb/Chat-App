import {
    all,
    call
} from 'redux-saga/effects';

import {currentUserAuthSaga} from "./auth/currentUserAuth.saga";

export function* currentUserSaga() {
    yield all([
        call(currentUserAuthSaga)
    ]);
}