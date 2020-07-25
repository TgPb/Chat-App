import {
    all,
    call
} from 'redux-saga/effects';

import {currentUserAuthSaga} from "./auth/currentUserAuth.saga";
import {currentUserChatsSaga} from "./chats/currentUserChats.saga";

export function* currentUserSaga() {
    yield all([
        call(currentUserAuthSaga),
        call(currentUserChatsSaga)
    ]);
}