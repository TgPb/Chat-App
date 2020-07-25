import {connect} from "react-redux";

import ParticipantsList from "./ParticipantsList.component";

import {selectChatParticipants} from "../../redux/chats/chats.selectors";

const mapStateToProps = (state, { chatId }) => ({
    participants: selectChatParticipants(chatId)(state)
})

export const ConnectedParticipantsList = connect(
    mapStateToProps
)(ParticipantsList);