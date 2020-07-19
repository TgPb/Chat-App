import React, {forwardRef} from 'react';
import classNames from 'classnames';

import styles from './MessageInput.module.scss';

const MessageInput = forwardRef(({handleInput, className}, ref) => {
    const inputStyles = classNames(
        styles['message-input'],
        {
            [className]: className
        }
    );

    return (
        <p
            ref={ref}
            className={inputStyles}
            onInput={({target: {innerText}}) => handleInput(innerText)}
            contentEditable
        />
    );
});

export default MessageInput;
