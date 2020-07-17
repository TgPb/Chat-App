import React from 'react';
import { Redirect } from 'react-router-dom';

const OnlyForAuthenticated = Component => (props) => {
    return (
        props.user ?
            <Component {...props} /> :
            <Redirect to={'/auth/signin'} />
    );
};

export default OnlyForAuthenticated;
