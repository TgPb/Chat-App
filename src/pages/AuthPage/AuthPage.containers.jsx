import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import AuthPage from "./AuthPage.page";

import {selectCurrentUserId} from "../../redux/currentUser/currentUser.selectors";

const mapStateToProps = createStructuredSelector({
    isAuthed: selectCurrentUserId
});

export const ConnectedAuthPage = connect(
    mapStateToProps
)(AuthPage);
