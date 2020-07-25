import {connect} from "react-redux";
import InvitePage from "./InvitePage.page";
import {setCurrentUserInvite} from "../../redux/currentUser/invite/currentUserInvite.actions";

const mapDispatchToProps = dispatch => ({
    setInvite: ({ invite }) => dispatch(setCurrentUserInvite({ invite }))
});

export const ConnectedInvitePage = connect(
    null,
    mapDispatchToProps
)(InvitePage);