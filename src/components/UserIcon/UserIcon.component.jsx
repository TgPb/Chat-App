import React from 'react';
import classNames from 'classnames';

import styles from './UserIcon.module.scss';

const UserIcon = ({ src, size, className }) => {
    const iconStyles = classNames(
        styles['user-icon'],
        {
            [className]: className
        }
    );

    return (
        <div
            className={iconStyles}
            style={{
                width: size,
                height: size,
                backgroundImage: `url(${src})`
            }}
        />
    );
};

export default UserIcon;
