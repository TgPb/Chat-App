import {connect} from "react-redux";

import ChatPreview from "./ChatPreview.component";

import {selectChatPreviewInfo} from "../../redux/chats/chats.selectors";

const mapStateToProps = (state, { chatId }) => ({
    chatInfo: selectChatPreviewInfo(chatId)(state)
})

export const ConnectedChatPreview = connect(
    mapStateToProps
)(ChatPreview);