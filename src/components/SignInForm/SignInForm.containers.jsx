import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import SignInForm from "./SignInForm.component";

import {currentUserSignInStart} from "../../redux/currentUser/auth/data/currentUserAuthData.actions";
import {selectCurrentUserAuthLoading} from "../../redux/currentUser/currentUser.selectors";

const mapStateToProps = createStructuredSelector({
    loading: selectCurrentUserAuthLoading
});

const mapDispatchToProps = dispatch => ({
    signInStart: ({ email, password }) => dispatch(currentUserSignInStart({ email, password }))
});

export const ConnectedSignInForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignInForm);