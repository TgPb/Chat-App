import React from 'react';
import classNames from 'classnames';

import styles from './UserIcon.module.scss';

const UserIcon = ({ src, size, className, darkBorder }) => {
    const iconStyles = classNames(
        styles['user-icon'],
        {
            [styles['user-icon_dark-border']]: darkBorder
        },
        {
            [className]: className
        },
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
