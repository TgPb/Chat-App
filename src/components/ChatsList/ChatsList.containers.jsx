import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import ChatsList from "./ChatsList.component";

import {selectCurrentUserChatsIds} from "../../redux/currentUser/currentUser.selectors";

const mapStateToProps = createStructuredSelector({
    chatsIds: selectCurrentUserChatsIds
});

export const ConnectedChatsList = connect(
    mapStateToProps
)(ChatsList);