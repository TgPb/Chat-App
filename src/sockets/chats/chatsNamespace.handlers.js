import {all, apply, call, put} from "redux-saga/effects";

import {
    currentUserChatsFetchStart,
    currentUserChatsFetchSuccess, currentUserNewChat
} from "../../redux/currentUser/chats/data/currentUserChatsData.actions";
import {
    resetCurrentUserChatsLoading,
    setCurrentUserChatsLoading
} from "../../redux/currentUser/chats/loading/currentUserChatsLoading.actions";

import {chatsNamespaceEvents} from "./chatsNamespace.events";
import {addNewMessageToHistory, setChatInfo} from "../../redux/chats/chats.actions";
import {setUserInfo, setUserOffline, setUserOnline} from "../../redux/users/users.actions";

export function* userChatsFetchStart({ socket }) {
    // notify about chats fetch start for cleaner redux history
    yield put(currentUserChatsFetchStart());
    // set chats loading
    yield put(setCurrentUserChatsLoading());
    // send request for chats
    yield apply(socket, socket.emit, [chatsNamespaceEvents.CHATS_FETCH_START]);
}

function* setParticipant(participant) {
    const { name, surname, _id, icon } = participant;
    // setting participant info
    yield put(setUserInfo({ _id, name, surname, icon }));
}

function* setChat(chat) {
    const { _id, name, description, participants, messages, isPrivate, icon } = chat;
    // setting all participants info to redux
    yield all(participants.map(
        participant => call(setParticipant, participant)
    ));
    // getting participant ids for chat info
    const participantsIds = participants.map(
        user => user._id
    );
    // setting chat info
    yield put(setChatInfo({ _id, participantsIds, messages, isPrivate, description, name, icon }));
}

export function* userChatsFetchSuccess({ chats }) {
    const chatIds = chats.map(
        chat => chat._id
    );
    // setting all chats info
    yield all(chats.map(chat => call(setChat, chat)));
    // notify about chats fetch success
    yield put(currentUserChatsFetchSuccess({ chatIds }));
    // reset chat loading
    yield put(resetCurrentUserChatsLoading());
}

export function* createNewChatSuccess({ chat }) {
    const { _id: chatId } = chat;
    // set chat info
    yield call(setChat, chat);
    // add chat to users chats-list
    yield put(currentUserNewChat({ chatId }));
    // reset chats loading
    yield put(resetCurrentUserChatsLoading());
}
// set new message to chat
export function* addNewMessage({ to, message }) {
    yield put(addNewMessageToHistory({ to, message }));
}
// set user isOnline
export function* setChatUserOnline({ _id }) {
    yield put(setUserOnline({ _id }));
}
// reset user isOnline
export function* setChatUserOffline({ _id }) {
    yield put(setUserOffline({ _id }));
}
