import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import OnlyForAuthenticated from "./OnlyForAuthenticated.hoc";

import {selectCurrentUserId} from "../../redux/currentUser/currentUser.selectors";

const mapStateToProps = createStructuredSelector({
    isAuthed: selectCurrentUserId
});

export const ConnectedOnlyForAuthenticated = connect(
    mapStateToProps
)(OnlyForAuthenticated);