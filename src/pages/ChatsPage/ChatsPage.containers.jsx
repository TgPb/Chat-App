import {connect} from "react-redux";

import ChatsPage from "./ChatsPage.page";

import {connectToChatsSocket} from "../../redux/currentUser/chats/data/currentUserChatsData.actions";

const mapDispatchToProps = dispatch => ({
    connectToChatsSocket: () => dispatch(connectToChatsSocket())
});

export const ConnectedChatsPage = connect(
    null,
    mapDispatchToProps
)(ChatsPage);