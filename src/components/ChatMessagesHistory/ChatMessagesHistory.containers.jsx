import {connect} from "react-redux";
import ChatMessagesHistory from "./ChatMessagesHistory.component";
import {selectChatHistory} from "../../redux/chats/chats.selectors";

const mapStateToProps = (state, { chatId }) => ({
    messages: selectChatHistory(chatId)(state)
})

export const ConnectedChatMessagesHistory = connect(
    mapStateToProps
)(ChatMessagesHistory);