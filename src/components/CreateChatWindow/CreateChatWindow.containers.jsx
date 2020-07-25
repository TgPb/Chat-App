import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import CreateChatWindow from "./CreateChatWindow.component";

import {selectCurrentUserChatsLoading} from "../../redux/currentUser/currentUser.selectors";
import {createChat} from "../../redux/currentUser/chats/data/currentUserChatsData.actions";

const mapStateToProps = createStructuredSelector({
    loading: selectCurrentUserChatsLoading
});

const mapDispatchToProps = dispatch => ({
    createChat: ({ name, description, icon, history }) => dispatch(createChat({
        name,
        description,
        icon,
        history
    }))
})

export const ConnectedCreateChatWindow = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateChatWindow);