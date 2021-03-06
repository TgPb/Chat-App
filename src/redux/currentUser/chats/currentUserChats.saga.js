import {
    all,
    call,
    takeLatest,
    select,
    take,
    fork,
    apply,
    put
} from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';
import axios from 'axios';

import {selectCurrentUserId, selectCurrentUserInvite, selectCurrentUserToken} from "../currentUser.selectors";
import {currentUserChatsDataTypes} from "./data/currentUserChatsData.types";
import {
    addParticipant,
    chatsFetchSuccess,
    connectedToChats,
    createChatSuccess,
    newMessage, participantOffline, participantOnline
} from "../../../sockets/chats/chatsNamespace.actions";
import {chatsNamespaceEvents} from "../../../sockets/chats/chatsNamespace.events";
import {
    addChatParticipant,
    addNewMessage,
    createNewChatSuccess, setChatUserOffline, setChatUserOnline,
    userChatsFetchStart,
    userChatsFetchSuccess
} from "../../../sockets/chats/chatsNamespace.handlers";
import {resetCurrentUserChatsLoading, setCurrentUserChatsLoading} from "./loading/currentUserChatsLoading.actions";

function* createChatsSocketConnection() {
    const _id = yield select(selectCurrentUserId);
    const invite = yield select(selectCurrentUserInvite);

    return yield io.connect('/chats', {
        query: {
            _id,
            invite: invite || ''
        }
    });
}

function createChatsSocketChannel(socket) {
    return eventChannel(emit => {

        const connectHandler = () => {
            emit(connectedToChats());
        };

        const chatsFetchSuccessHandler = ({ chats }) => {
            emit(chatsFetchSuccess({ chats }));
        };

        const createChatSuccessHandler = ({ chat }) => {
            emit(createChatSuccess({ chat }));
        };

        const chatNewMessageHandler = ({ to, message }) => {
            emit(newMessage({ to, message }));
        };

        const participantOnlineHandler = ({ _id }) => {
            emit(participantOnline({ _id }));
        };

        const participantOfflineHandler = ({ _id }) => {
            emit(participantOffline({ _id }));
        };

        const chatsFetchErrorHandler = () => {
            alert('Error during fetching chats. Please, reload the page and try again');
        };

        const createChatErrorHandler = () => {
            alert('Error during creating chat. Please, reload the page and try again');
        };

        const sendMessageErrorHandler = () => {
            alert('Error during sending message. Please, try again');
        };

        const addParticipantErrorHandler = ({ message }) => {
            alert(message);
        };

        const newParticipantHandler = ({ to, participant }) => {
            emit(addParticipant({ to, participant }));
        };

        socket.on(chatsNamespaceEvents.CONNECT, connectHandler);

        socket.on(chatsNamespaceEvents.CHATS_FETCH_SUCCESS, chatsFetchSuccessHandler);

        socket.on(chatsNamespaceEvents.CREATE_CHAT_SUCCESS, createChatSuccessHandler);

        socket.on(chatsNamespaceEvents.NEW_MESSAGE, chatNewMessageHandler);

        socket.on(chatsNamespaceEvents.PARTICIPANT_ONLINE, participantOnlineHandler);

        socket.on(chatsNamespaceEvents.PARTICIPANT_OFFLINE, participantOfflineHandler);

        socket.on(chatsNamespaceEvents.CHATS_FETCH_ERROR, chatsFetchErrorHandler);

        socket.on(chatsNamespaceEvents.CREATE_CHAT_ERROR, createChatErrorHandler);

        socket.on(chatsNamespaceEvents.SEND_MESSAGE_ERROR, sendMessageErrorHandler);

        socket.on(chatsNamespaceEvents.ADD_PARTICIPANT_ERROR, addParticipantErrorHandler);

        socket.on(chatsNamespaceEvents.NEW_PARTICIPANT, newParticipantHandler);

        return () => {
            socket.close();
        }
    });
}

const createChatHandler = socket => function* ({ payload }) {
    yield put(setCurrentUserChatsLoading());

    const { name, description, icon, history } = payload;

    let chatIcon;
    try {
        if (icon) {
            const data = new FormData();
            data.append('icon', icon);

            const token = yield select(selectCurrentUserToken);

            const response = yield axios.post(
                '/chats/create',
                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        authorization: `Bearer ${token}`
                    }
                }
            );

            chatIcon = response.data.icon;
        }
    } catch (e) {
        yield put(resetCurrentUserChatsLoading());

        const { response: { data: { name } } } = e;

        if (!name) return alert('Server unavailable. Please try again');

        switch (name) {
            case 'InvalidFileTypeError':
                alert('Invalid icon file type');
                return;

            default:
                alert('Something went wrong. Please try again');
                return;
        }
    }

    yield apply(socket, socket.emit, [chatsNamespaceEvents.CREATE_CHAT_START, {
        name,
        description,
        icon: chatIcon
    }]);

    history.push('/chats');
}

const sendMessageHandler = socket => function* ({ payload }) {
    const { to, text } = payload;

    yield apply(socket, socket.emit, [chatsNamespaceEvents.SEND_MESSAGE, { to, text }]);
}

function* createChatWatcher(socket) {
    yield takeLatest(currentUserChatsDataTypes.CREATE_NEW_CHAT, createChatHandler(socket));
}

function* sendMessageWatcher(socket) {
    yield takeLatest(currentUserChatsDataTypes.SEND_MESSAGE, sendMessageHandler(socket));
}

function* internalChatsEventsWatcher(socket) {
    yield all([
        call(createChatWatcher, socket),
        call(sendMessageWatcher, socket)
    ]);
}

function* externalChatsEventsWatcher(socket, channel) {
    while (true) {
        try {
            const event = yield take(channel);

            const { type, payload } = event;

            switch (type) {
                case chatsNamespaceEvents.CHATS_FETCH_SUCCESS:
                    const { chats } = payload;

                    yield fork(userChatsFetchSuccess, { chats });
                    break;

                case chatsNamespaceEvents.CONNECT:
                    yield fork(userChatsFetchStart, { socket });
                    break;

                case chatsNamespaceEvents.CREATE_CHAT_SUCCESS:
                    const { chat } = payload;

                    yield fork(createNewChatSuccess, { chat });
                    break;

                case chatsNamespaceEvents.NEW_MESSAGE:
                    const { to, message } = payload;

                    yield fork(addNewMessage, { to, message });
                    break;

                case chatsNamespaceEvents.PARTICIPANT_ONLINE:
                    const { _id: userOnline } = payload;

                    yield fork(setChatUserOnline, { _id: userOnline });
                    break;

                case chatsNamespaceEvents.PARTICIPANT_OFFLINE:
                    const { _id: userOffline } = payload;

                    yield fork(setChatUserOffline, { _id: userOffline });
                    break;

                case chatsNamespaceEvents.NEW_PARTICIPANT:
                    const { to: chatId, participant } = payload;

                    yield fork(addChatParticipant, { to: chatId, participant });
                    break;

                default:
                    break;
            }
        } catch (e) {
            channel.close();
            alert('Something went wrong. Try to update the page');
        }
    }
}

function* connectToChatsHandler() {
    const socket = yield call(createChatsSocketConnection);
    const channel = yield call(createChatsSocketChannel, socket);

    yield all([
        call(externalChatsEventsWatcher, socket, channel),
        call(internalChatsEventsWatcher, socket)
    ]);
}

function* connectToChatsWatcher() {
    yield takeLatest(currentUserChatsDataTypes.CONNECT_TO_CHATS_SOCKET, connectToChatsHandler);
}

export function* currentUserChatsSaga() {
    yield all([
        call(connectToChatsWatcher)
    ]);
}