import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import classNames from 'classnames';

import styles from './ChatPreview.module.scss';

const ChatPreview = ({ chat }) => {
    const history = useHistory();
    const { chatId } = useParams();

    const previewStyles = classNames(
        styles['chat-preview'],
        {
            [styles['chat-preview_active']]: chat === +chatId
        }
    );

    return (
        <div
            className={previewStyles}
            onClick={() => history.push(`/chats/${chat}`)}
        >
            <div className={styles['preview__icon']}>

            </div>
            Chat { chat }
        </div>
    );
};

export default ChatPreview;
