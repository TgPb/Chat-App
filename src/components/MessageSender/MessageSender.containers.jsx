import {connect} from "react-redux";

import MessageSender from "./MessageSender.component";

import {sendMessage} from "../../redux/currentUser/chats/data/currentUserChatsData.actions";

const mapDispatchToProps = dispatch => ({
    sendMessage: ({ to, text }) => dispatch(sendMessage({ to, text }))
})

export const ConnectedMessageSender = connect(
    null,
    mapDispatchToProps
)(MessageSender);