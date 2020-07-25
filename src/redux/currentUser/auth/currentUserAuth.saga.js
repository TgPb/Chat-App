import {
    all,
    call,
    takeLatest,
    put
} from 'redux-saga/effects';
import axios from 'axios';

import {currentUserAuthDataTypes} from "./data/currentUserAuthData.types";
import {setCurrentUserAuthLoading, resetCurrentUserAuthLoading} from "./loading/currentUserAuthLoading.actions";
import {
    currentUserSignInSuccess,
    currentUserSignOutSuccess,
    currentUserSignUpSuccess
} from "./data/currentUserAuthData.actions";
import {setUserInfo} from "../../users/users.actions";



function* userSignInHandler({ payload }) {
    try {
        yield put(setCurrentUserAuthLoading());

        const { email, password } = payload;

        const response = yield axios.post(
            '/auth/signin',
            { email, password }
        );

        const { data: { token, user } } = response;
        const { _id, name, surname, icon } = user;

        localStorage.setItem('token', token);

        yield put(currentUserSignInSuccess({ _id, token }));

        yield put(setUserInfo({
            _id,
            name,
            surname,
            icon
        }));

        yield put(resetCurrentUserAuthLoading());

    } catch (e) {
        yield put(resetCurrentUserAuthLoading());

        const { response: { data: { name } } } = e;

        if (!name) return alert('Server unavailable. Please try again');

        switch (name) {
            case 'InvalidEmailOrPasswordError':
                alert('Invalid email or password');
                break;

            default:
                alert('Something went wrong. Please try again');
                break;
        }
    }
}

function* userSignUpHandler({ payload }) {
    try {
        yield put(setCurrentUserAuthLoading());

        const { name, surname, email, password, icon, history } = payload;

        const data = new FormData();
        icon && data.append('icon', icon);
        data.append('email', email);
        data.append('password', password);
        data.append('name', name);
        data.append('surname', surname);

        yield axios.post(
            '/auth/signup',
            data,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        );

        yield put(currentUserSignUpSuccess());

        yield put(resetCurrentUserAuthLoading());

        history.push('/auth/signin');

    } catch (e) {
        yield put(resetCurrentUserAuthLoading());

        const { response: { data: { name } } } = e;

        if (!name) return alert('Server unavailable. Please try again');

        switch (name) {
            case 'InvalidFileTypeError':
                alert('Invalid icon file type');
                break;

            case 'UserUniquenessError':
                alert('User with this email already exists');
                break;

            default:
                alert('Something went wrong. Please try again');
                break;
        }
    }
}

function* userSignInWithTokenHandler() {
    try {
        yield put(setCurrentUserAuthLoading());

        const token = localStorage.getItem('token');

        if (token) {
            const response = yield axios.post(
                '/auth/signin/token',
                null,
                {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                }
            );

            const { data: { user } } = response;
            const { _id, name, surname, icon } = user;

            yield put(currentUserSignInSuccess({ _id, token }));

            yield put(setUserInfo({
                _id,
                name,
                surname,
                icon
            }));
        }


        yield put(resetCurrentUserAuthLoading());
    } catch (e) {
        console.log({e})

        yield put(resetCurrentUserAuthLoading());

        const { response: { data: { name } } } = e;

        if (!name) return alert('Server unavailable. Please try again');

        switch (name) {
            case 'TokenExpiredError':
                alert('Token expired. Please sign in with credentials');
                break;

            case 'InternalServerError':
                alert('Something went wrong. Please try again');
                break;

            case 'NotFoundError':
                alert('User not found');
                break;

            default:
                return;
        }
    }
}

function* userSignOutHandler() {
    localStorage.removeItem('token');

    yield put(currentUserSignOutSuccess());
}

function* userSignInWatcher() {
    yield takeLatest(currentUserAuthDataTypes.USER_SIGN_IN_START, userSignInHandler);
}

function* userSignUpWatcher() {
    yield takeLatest(currentUserAuthDataTypes.USER_SIGN_UP_START, userSignUpHandler)
}

function* userSignInWithTokenWatcher() {
    yield takeLatest(currentUserAuthDataTypes.USER_SIGN_IN_WITH_TOKEN, userSignInWithTokenHandler);
}

function* userSignOutWatcher() {
    yield takeLatest(currentUserAuthDataTypes.USER_SIGN_OUT_START, userSignOutHandler);
}

export function* currentUserAuthSaga() {
    yield all([
        call(userSignInWatcher),
        call(userSignUpWatcher),
        call(userSignInWithTokenWatcher),
        call(userSignOutWatcher)
    ])
}