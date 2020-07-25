import {useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const InvitePage = ({ setInvite, match: { params: { invite } } }) => {
    const history = useHistory();

    useEffect(
        () => {
            setInvite({ invite });
            history.push('/');
        },
        [setInvite, invite, history]
    );

    return null;
};

export default InvitePage;
