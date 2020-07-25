import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import UserCard from "./UserCard.component";

import {selectCurrentUserInfo} from "../../redux/currentUser/currentUser.selectors";
import {currentUserSignOutStart} from "../../redux/currentUser/auth/data/currentUserAuthData.actions";

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUserInfo
});

const mapDispatchToProps = dispatch => ({
    startSignOut: () => dispatch(currentUserSignOutStart())
})

export const ConnectedUserCard = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserCard);