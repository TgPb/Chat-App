import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import SignUpForm from "./SignUpForm.component";

import {selectCurrentUserAuthLoading} from "../../redux/currentUser/currentUser.selectors";
import {currentUserSignUpStart} from "../../redux/currentUser/auth/data/currentUserAuthData.actions";

const mapStateToProps = createStructuredSelector({
    loading: selectCurrentUserAuthLoading
});

const mapDispatchToProps = dispatch => ({
    signUpStart: ({
        email,
        password,
        name,
        surname,
        icon,
        history
    }) => dispatch(currentUserSignUpStart({
        email,
        password,
        name,
        surname,
        icon,
        history
    }))
});

export const ConnectedSignUpForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpForm);