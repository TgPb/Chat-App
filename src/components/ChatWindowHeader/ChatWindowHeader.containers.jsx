import {connect} from "react-redux";

import {selectChatPreviewInfo} from "../../redux/chats/chats.selectors";

import ChatWindowHeader from "./ChatWindowHeader.component";

const mapStateToProps = (state, { chatId }) => ({
    chatInfo: selectChatPreviewInfo(chatId)(state)
})

export const ConnectedChatWindowHeader = connect(
    mapStateToProps
)(ChatWindowHeader);