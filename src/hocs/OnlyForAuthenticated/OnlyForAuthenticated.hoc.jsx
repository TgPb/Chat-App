import React from 'react';
import { Redirect } from 'react-router-dom';

const OnlyForAuthenticated = ({ children, isAuthed }) => {
    return (
        isAuthed ?
            children :
            <Redirect to={'/auth/signin'} />
    );
};

export default OnlyForAuthenticated;
